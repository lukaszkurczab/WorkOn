import { createSlice } from '@reduxjs/toolkit';

const history = createSlice({
  name: 'history',
  initialState: {
    history: [],
  },
  reducers: {
    REMOVE_FROM_HISTORY: (state, action) => {
      const newHistory = state.history.filter(day => day.id !== action.payload);

      state.history = newHistory;
    },
  },
});

export const { REMOVE_FROM_HISTORY } = history.actions;

export default history.reducer;
