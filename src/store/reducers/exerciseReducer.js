import { createSlice } from "@reduxjs/toolkit";
import { exercises } from "../db/exerciseList";

const exercise = createSlice({
  name: "exercise",
  initialState: exercises,
  reducers: {
    ADD_EXERCISE: (state, action) => {
      state.environment = [...state.environment, action.payload];
    },
  }
});

export default exercise.reducer
