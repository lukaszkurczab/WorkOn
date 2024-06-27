import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { getUserData } from '../actions/userActions';
import { WorkoutPlan } from '../../types/plans';
import { HistoryItem } from '../../types/history';

interface UserState {
  id: string;
  email: string;
  plans: WorkoutPlan[];
  history: HistoryItem[];
}

interface JwtPayload {
  id: string;
  email: string;
}

const initialState: UserState = {
  id: '',
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
  },
  extraReducers: builder => {
    builder.addCase(
      getUserData.fulfilled,
      (state, action: PayloadAction<{ plans: WorkoutPlan[]; history: HistoryItem[] }>) => {
        state.plans = action.payload.plans;
        state.history = action.payload.history;
      }
    );
  },
});

export const { DECODE_USER_DATA } = userSlice.actions;
export default userSlice.reducer;
