import { createSlice } from "@reduxjs/toolkit";
import { exercises } from "../db/exerciseList";

const exercise = createSlice({
  name: "exercise",
  initialState: exercises,
  reducers: {
    ADD_EXERCISE: (state, action) => {
      state.exercises = [...state.exercises, action.payload];
    },
  }
});

export const {
  ADD_EXERCISE
} = exercise.actions;

export default exercise.reducer
