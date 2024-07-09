import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { getUserData } from '../actions/userActions';
import { WorkoutPlan } from '../../types/plans';
import { HistoryItem } from '../../types/history';
import { addHistoryItem } from '../../features/training/store/actions/actions';

interface UserState {
  id: string;
  email: string;
  username: string;
  plans: WorkoutPlan[];
  history: HistoryItem[];
}

interface JwtPayload {
  id: string;
  email: string;
}

const initialState: UserState = {
  id: '',
  username: '',
  email: '',
  plans: [
    {
      id: '',
      name: '',
      days: [],
      publicType: '',
      allowedUsers: [],
      authorId: '',
      public: false,
    },
  ],
  history: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    DECODE_USER_DATA: (state, action: PayloadAction<string>) => {
      const decodedData: JwtPayload = jwtDecode(action.payload);
      state.id = decodedData.id;
      state.email = decodedData.email;
    },
    CHANGE_USERNAME: (state, action) => {
      state.username = action.payload;
    },
    UPDATE_PLANS: (state, action) => {
      state.plans = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getUserData.fulfilled,
      (state, action: PayloadAction<{ plans: WorkoutPlan[]; history: HistoryItem[] }>) => {
        state.plans = action.payload.plans;
        state.history = action.payload.history;
      }
    );
    builder.addCase(addHistoryItem.fulfilled, (state, action: PayloadAction<HistoryItem>) => {
      state.history.unshift(action.payload);
    });
  },
});

export const { DECODE_USER_DATA, CHANGE_USERNAME, UPDATE_PLANS } = userSlice.actions;
export default userSlice.reducer;
