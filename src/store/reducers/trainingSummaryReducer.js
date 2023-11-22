import { createSlice } from "@reduxjs/toolkit";

const trainingSummary = createSlice({
  name: "trainingSummary",
  initialState: {
    trainingSummary: {},
    trainingName: ''
  },
  reducers: {
    SET_TRAINING_SUMMARY: (state, action) => {
      state.trainingSummary = action.payload.training;
    }
  }
});

export const {
    SET_TRAINING_SUMMARY
} = trainingSummary.actions;

export default trainingSummary.reducer