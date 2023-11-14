import { createSlice } from "@reduxjs/toolkit";

const training = createSlice({
  name: "training",
  initialState: {
    ongoingTraining: {}
  },
  reducers: {
    START_TRAINING: (state, action) => {
      state.ongoingTraining = action.payload;
    },
    UPDATE_PROGRESS: (state, action) => {
      state.ongoingTraining = action.payload;
    },
    FINISH_TRAINING: (state) => {
        state.ongoingTraining = {}
    }
  }
});

export const {
  START_TRAINING
} = training.actions;

export default training.reducer