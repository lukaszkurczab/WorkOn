import { createSlice } from '@reduxjs/toolkit';

const session = createSlice({
  name: 'session',
  initialState: {},
  reducers: {},
});

export const { SET_ONGOING_TRAINING } = session.actions;

export default session.reducer;
