import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { getUserData } from '../actions/userActions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    plans: [],
    history: [],
  },
  reducers: {
    DECODE_USER_DATA: (state, action) => {
      const decodedData: any = jwtDecode(action.payload);
      state.id = decodedData.id;
      state.email = decodedData.email;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.plans = action.payload.plans;
      state.history = action.payload.history;
    });
  },
});

export const { DECODE_USER_DATA } = userSlice.actions;
export default userSlice.reducer;
