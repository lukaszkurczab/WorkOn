import { createSlice, isActionCreator, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { getUserData } from '../actions/userActions';
import { WorkoutPlan } from '../../types/plans';
import { HistoryItem } from '../../types/history';
import { addHistoryItem } from '../../features/training/store/actions/actions';
import { User, UserSettings } from '../../types/users';
import { createPlan } from '../../features/manualCreator/store/actions/actions';
import { removePlan } from '../../features/plansList/store/actions/actions';

interface JwtPayload {
  id: string;
  email: string;
}

const initialState: User = {
  id: '',
  username: '',
  email: '',
  plans: [
    {
      id: '',
      name: '',
      days: [],
      publicType: 'public',
      allowedUsers: [],
      authorId: '',
    },
  ],
  settings: {
    defaultHistoryPublicType: 'public',
  },
  history: [],
  bio: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    CHANGE_USERNAME: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    DECODE_USER_DATA: (state, action: PayloadAction<string>) => {
      const decodedData: JwtPayload = jwtDecode(action.payload);
      state.id = decodedData.id;
      state.email = decodedData.email;
    },
    UPDATE_PLANS: (state, action) => {
      state.plans = action.payload;
    },
    UPDATE_HISTORY: (state, action) => {
      state.history = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getUserData.fulfilled,
        (
          state,
          action: PayloadAction<{
            username: string;
            plans: WorkoutPlan[];
            history: HistoryItem[];
            settings: UserSettings;
          }>
        ) => {
          state.username = action.payload.username;
          state.settings = action.payload.settings;
          state.plans = action.payload.plans;
          state.history = action.payload.history;
        }
      )
      .addCase(createPlan.fulfilled, (state, action: PayloadAction<WorkoutPlan>) => {
        const index = state.plans.findIndex(plan => plan.id === action.payload.id);
        if (index !== -1) {
          state.plans[index] = action.payload;
        } else {
          state.plans.push(action.payload);
        }
      })
      .addCase(removePlan.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.plans.findIndex(plan => plan.id === action.payload.planId);
        if (index !== -1) {
          state.plans.splice(index, 1);
        }
      })
      .addCase(addHistoryItem.fulfilled, (state, action: PayloadAction<HistoryItem>) => {
        state.history.unshift(action.payload);
      });
  },
});

export const { DECODE_USER_DATA, CHANGE_USERNAME, UPDATE_PLANS, UPDATE_HISTORY } = userSlice.actions;
export default userSlice.reducer;
