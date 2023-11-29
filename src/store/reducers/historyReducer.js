import { createSlice } from "@reduxjs/toolkit";
import { history as historyDB } from "../db/history";

const history = createSlice({
  name: "history",
  initialState: {
    history: historyDB,
  },
  reducers: {
    ADD_TO_HISTORY: (state, action) => {
      const newElement = action.payload;
      const todayDate = new Date();
          
      state.history = [...state.history, {
        id: (Math.random() * 1000000000).toFixed(),
        date: `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDay()}`,
        name: newElement.name,
        time: newElement.totalTime,
        exercises: newElement.exercises
      }];
    },
    REMOVE_FROM_HISTORY: (state, action) => {
      const newHistory = state.history.filter((day) => day.id !== action.payload)

      state.history = newHistory
    }
  }
});

export const {
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY
} = history.actions;

export default history.reducer