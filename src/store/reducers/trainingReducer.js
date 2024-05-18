import { createSlice } from '@reduxjs/toolkit';

const training = createSlice({
  name: 'training',
  initialState: {
    ongoingExercise: {},
    startedTraining: null,
    trainingStart: new Date(),
    trainingSummary: [],
    finishedExercises: [],
    notFinishedExercises: [],
    lastActivity: new Date(),
    trainingStep: 'select',
    restStart: new Date(),
  },
  reducers: {
    START_TRAINING: (state, action) => {
      state.startedTraining = {
        id: action.payload.plan.id,
        plan: action.payload.plan.name,
        day: action.payload.day.name,
        exercises: action.payload.day.exercises,
      };
      state.trainingStart = Date.now();
      state.finishedExercises = [];
      state.notFinishedExercises = action.payload.day.exercises;
      state.trainingSummary = { name: action.payload.plan.name, day: action.payload.day.name, exercises: [] };
      state.trainingStep = 'select';
      state.lastActivity = new Date();
    },
    SET_ONGOING_EXERCISE: (state, action) => {
      state.ongoingExercise = { exercise: action.payload, serieIndex: 0 };
      state.trainingStep = 'exercise';
      state.lastActivity = new Date();
    },
    FINISH_SERIE: (state, action) => {
      state.ongoingExercise.exercise.series[state.ongoingExercise.serieIndex].reps = action.payload.reps;
      state.ongoingExercise.exercise.series[state.ongoingExercise.serieIndex].weight = action.payload.weight;

      if (state.ongoingExercise.serieIndex < state.ongoingExercise.exercise.series.length - 1) {
        state.ongoingExercise.serieIndex = state.ongoingExercise.serieIndex + 1;
        state.trainingStep = 'rest';
      } else {
        state.notFinishedExercises = state.notFinishedExercises.filter(exercise => exercise.id !== state.ongoingExercise.exercise.id);
        state.finishedExercises = [...state.finishedExercises, state.ongoingExercise.exercise];
        state.trainingSummary.exercises = [...state.trainingSummary.exercises, state.ongoingExercise.exercise];
        state.trainingStep = 'select';
      }
      state.restStart = new Date();
      state.lastActivity = new Date();
    },
    END_REST: state => {
      state.trainingStep = 'exercise';
      state.lastActivity = new Date();
    },
    END_TRAINING: state => {
      state.startedTraining = null;
    },
  },
});

export const { START_TRAINING, FINISH_SERIE, END_REST, END_TRAINING, SET_ONGOING_EXERCISE } = training.actions;

export default training.reducer;
