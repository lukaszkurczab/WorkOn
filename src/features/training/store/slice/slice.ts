import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exercise, Series } from '../../../../types/exercises';
import { updateUserPlan } from '../actions/actions';

interface TrainingSummaryExercise {
  id: string;
  name: string;
  loadIncrease: number;
  repsRange: [number, number];
  series: Series[];
}

interface TrainingSummary {
  planName: string;
  id: string;
  name: string;
  duration: number;
  exercises: TrainingSummaryExercise[];
}

interface SelectedExercise extends Omit<TrainingSummaryExercise, 'series'> {
  focusPoints: string;
  group: string;
  muscleAdditional: string[];
  muscleMain: string[];
  startPostition: string;
  series: Series[];
}

interface TrainingState {
  selectedPlan: {
    id: string;
    name: string;
    days: any[];
  };
  selectedTraining: {
    id: string;
    name: string;
    exercises: Exercise[];
  };
  step: string;
  startTime: number;
  unfinishedExercises: Exercise[];
  finishedExercises: Exercise[];
  trainingSummary: TrainingSummary;
  selectedExercise: SelectedExercise;
  seriesIndex: number;
  restStart: Date;
  lastActivity: number | null;
}

const initialState: TrainingState = {
  selectedPlan: {
    id: '',
    name: '',
    days: [],
  },
  selectedTraining: {
    id: '',
    name: '',
    exercises: [],
  },
  step: 'select',
  startTime: 0,
  unfinishedExercises: [],
  finishedExercises: [],
  trainingSummary: {
    id: '',
    planName: '',
    name: '',
    duration: 0,
    exercises: [],
  },
  selectedExercise: {
    id: '',
    name: '',
    focusPoints: '',
    group: '',
    muscleAdditional: [''],
    muscleMain: [''],
    startPostition: '',
    loadIncrease: 0,
    repsRange: [0, 0],
    series: [{ id: '0', reps: 0, weight: 0 }],
  },
  seriesIndex: 0,
  restStart: new Date(),
  lastActivity: null,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    SELECT_PLAN: (state, action: PayloadAction<typeof initialState.selectedPlan>) => {
      state.selectedPlan = action.payload;
    },
    SELECT_TRAINING: (state, action: PayloadAction<typeof initialState.selectedTraining>) => {
      state.selectedTraining = action.payload;
    },
    SELECT_EXERCISE: (state, action: PayloadAction<typeof initialState.selectedExercise>) => {
      state.selectedExercise = action.payload;
      state.step = 'exercise';
      state.seriesIndex = 0;
      state.lastActivity = Date.now();
    },
    START_TRAINING: (state, action: PayloadAction<{ id: string; name: string; exercises: Exercise[] }>) => {
      state.startTime = Date.now();
      state.step = 'select';
      state.seriesIndex = 0;
      state.unfinishedExercises = action.payload.exercises;
      state.finishedExercises = [];
      state.trainingSummary = {
        planName: state.selectedPlan.name,
        id: action.payload.id,
        name: action.payload.name,
        duration: 0,
        exercises: [],
      };
      state.lastActivity = Date.now();
    },
    END_SERIE: (state, action: PayloadAction<{ id: string; reps: number; weight: number }>) => {
      const exerciseIndex = state.unfinishedExercises.findIndex(exercise => exercise.id === state.selectedExercise.id);

      if (exerciseIndex !== -1) {
        const series = state.unfinishedExercises[exerciseIndex].series;
        series[state.seriesIndex] = {
          id: action.payload.id,
          reps: action.payload.reps,
          weight: action.payload.weight,
        };

        const summaryExerciseIndex = state.trainingSummary.exercises.findIndex(
          exercise => exercise.id === state.selectedExercise.id
        );
        if (summaryExerciseIndex !== -1) {
          state.trainingSummary.exercises[summaryExerciseIndex].series.push({
            id: action.payload.id,
            reps: action.payload.reps,
            weight: action.payload.weight,
          });
        } else {
          state.trainingSummary.exercises.push({
            id: state.selectedExercise.id,
            name: state.selectedExercise.name,
            loadIncrease: state.selectedExercise.loadIncrease,
            repsRange: state.selectedExercise.repsRange,
            series: [{ id: action.payload.id, reps: action.payload.reps, weight: action.payload.weight }],
          });
        }

        if (state.seriesIndex < series.length - 1) {
          state.seriesIndex += 1;
          state.step = 'rest';
        } else {
          const finishedExercise = state.unfinishedExercises.splice(exerciseIndex, 1)[0];
          state.finishedExercises.push(finishedExercise);
          state.step = 'select';
        }
        state.restStart = new Date();
      }
      state.lastActivity = Date.now();
    },
    END_REST: state => {
      state.step = 'exercise';
      state.lastActivity = Date.now();
    },
    END_TRAINING: state => {
      state.step = 'select';
      state.unfinishedExercises = [];
      state.finishedExercises = [];
      state.trainingSummary = {
        ...state.trainingSummary,
        duration: Date.now() - state.startTime,
      };
      state.lastActivity = null;
    },
    END_EXERCISE: state => {
      const exerciseIndex = state.unfinishedExercises.findIndex(exercise => exercise.id === state.selectedExercise.id);

      state.step = 'select';
      state.seriesIndex = 0;
      const finishedExercise = state.unfinishedExercises.splice(exerciseIndex, 1)[0];
      state.finishedExercises.push(finishedExercise);
      state.lastActivity = Date.now();
    },
  },
  extraReducers: builder => {
    builder.addCase(updateUserPlan.fulfilled, state => {
      state.step = 'select';
      state.unfinishedExercises = [];
      state.finishedExercises = [];
      state.trainingSummary = {
        ...state.trainingSummary,
        duration: Date.now() - state.startTime,
      };
    });
  },
});

export const {
  SELECT_PLAN,
  END_EXERCISE,
  END_REST,
  END_TRAINING,
  END_SERIE,
  SELECT_TRAINING,
  SELECT_EXERCISE,
  START_TRAINING,
} = trainingSlice.actions;
export default trainingSlice.reducer;
