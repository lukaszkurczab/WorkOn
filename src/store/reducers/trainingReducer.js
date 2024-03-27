import { createSlice } from '@reduxjs/toolkit';

const training = createSlice({
  name: 'training',
  initialState: {
    ongoingExercise: {},
    ongoingPlanData: null,
    ongoingPlanName: '',
    plan: {},
    trainingStart: new Date(),
    trainingSummary: [],
    finishedExercises: [],
    notFinishedExercises: [],
    trainingStep: 'select',
  },
  reducers: {
    START_TRAINING: (state, action) => {
      state.plan = {
        exercises: action.payload.plan.exercises,
        name: action.payload.plan.name,
        restDay: action.payload.plan.restDay,
      };
      state.ongoingPlanData = {
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        planType: action.payload.planType,
        dayIndex: action.payload.dayIndex,
      };
      state.ongoingPlanName = action.payload.name;
      state.trainingStart = Date.now();
      state.finishedExercises = [];
      state.notFinishedExercises = state.plan.exercises;
      state.trainingSummary = [];
      state.trainingStep = 'select';
    },
    SET_ONGOING_EXERCISE: (state, action) => {
      state.ongoingExercise = { exercise: action.payload, serieIndex: 0 };
      state.trainingStep = 'exercise';
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
        state.trainingSummary = [...state.trainingSummary, state.ongoingExercise.exercise];
        state.trainingStep = 'select';
      }
    },
    END_REST: state => {
      state.trainingStep = 'exercise';
    },
    END_TRAINING: state => {
      state.ongoingPlanData = null;
    },
  },
});

export const { START_TRAINING, FINISH_SERIE, END_REST, END_TRAINING, SET_ONGOING_EXERCISE } = training.actions;

export default training.reducer;
