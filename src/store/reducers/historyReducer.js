import { createSlice } from '@reduxjs/toolkit';
import { history as historyDB } from '../db/history';

const history = createSlice({
  name: 'history',
  initialState: {
    history: historyDB,
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
