import { createSlice } from "@reduxjs/toolkit";

const training = createSlice({
  name: "training",
  initialState: {
    ongoingTraining: {}
  },
  reducers: {
    START_TRAINING: (state, action) => {
      const newTraining = action.payload.map(exercise => (
        {
          id: exercise.id,
          series: exercise.series.map(i => ({...i, status: 'onTrack'}))
        }
      ))

      state.ongoingTraining = newTraining;
    },
    UPDATE_PROGRESS: (state, action) => {
      const elementToUpdateIndex = state.ongoingTraining.findIndex(i => i.id === action.payload.id)
      const seriesIndex = action.payload.index
      const finalReps = action.payload.reps
      const finalWeight = action.payload.weight

      state.ongoingTraining[elementToUpdateIndex].series[seriesIndex] = {
        reps: finalReps,
        weight: finalWeight,
        status: 'finished'
      }
    },
    FINISH_TRAINING: (state) => {
        state.ongoingTraining = {}
    }
  }
});

export const {
  START_TRAINING,
  UPDATE_PROGRESS,
  FINISH_TRAINING
} = training.actions;

export default training.reducer