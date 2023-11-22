import { createSlice } from "@reduxjs/toolkit";

const trainingSummary = createSlice({
  name: "trainingSummary",
  initialState: {
    trainingSummary: {},
    trainingName: '',
    trainingTime: 0
  },
  reducers: {
    SET_TRAINING_SUMMARY: (state, action) => {
      state.trainingSummary = action.payload.training;
      state.trainingName = action.payload.name;
      state.trainingTime = action.payload.time;
    }
  }
});

export const {
    SET_TRAINING_SUMMARY
} = trainingSummary.actions;

export default trainingSummary.reducer