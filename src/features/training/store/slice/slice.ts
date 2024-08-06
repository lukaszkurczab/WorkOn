import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exercise, Series } from '../../../../types/exercises';
import { updateUserPlan } from '../actions/actions';
import { WorkoutPlan } from '../../../../types/plans';
import { HistoryItem } from '../../../../types/history';

interface TrainingState {
  selectedPlan: WorkoutPlan;
  selectedTraining: {
    id: string;
    name: string;
    exercises: Exercise[];
  };
  step: string;
  startTime: number;
  unfinishedExercises: Exercise[];
  finishedExercises: Exercise[];
  trainingSummary: HistoryItem;
  selectedExercise: Exercise;
  seriesIndex: number;
  restStart: Date;
  lastActivity: number | null;
  sendingTraining: boolean;
}

const initialState: TrainingState = {
  selectedPlan: {
    id: '',
    name: '',
    days: [],
    publicType: 'public',
    allowedUsers: [],
    authorId: '',
    progression: '',
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
    date: new Date(),
    plan: '',
    day: '',
    time: 0,
    publicType: 'private',
    exercises: [],
  },
  selectedExercise: {
    id: '',
    name: '',
    loadIncrease: 0,
    repsRange: [0, 0],
    series: [{ id: '0', reps: 0, weight: 0 }],
  },
  seriesIndex: 0,
  restStart: new Date(),
  lastActivity: null,
  sendingTraining: false,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    SELECT_PLAN: (state, action: PayloadAction<WorkoutPlan>) => {
      state.selectedPlan = action.payload;
    },
    SELECT_TRAINING: (state, action: PayloadAction<typeof initialState.selectedTraining>) => {
      state.selectedTraining = action.payload;
    },
    SELECT_EXERCISE: (state, action: PayloadAction<Exercise>) => {
      state.selectedExercise = action.payload;
      state.step = 'exercise';
      state.seriesIndex = 0;
      state.lastActivity = Date.now();
    },
    START_TRAINING: (
      state,
      action: PayloadAction<{ id: string; name: string; exercises: Exercise[]; publicType: 'public' | 'private' }>
    ) => {
      state.startTime = Date.now();
      state.step = 'select';
      state.seriesIndex = 0;
      state.unfinishedExercises = action.payload.exercises;
      state.finishedExercises = [];
      state.trainingSummary = {
        plan: state.selectedPlan.name,
        id: action.payload.id,
        day: action.payload.name,
        time: 0,
        publicType: action.payload.publicType,
        date: new Date(),
        exercises: [],
      };
      state.lastActivity = Date.now();
    },
    END_SERIE: (state, action: PayloadAction<Series>) => {
      const exerciseIndex = state.unfinishedExercises.findIndex(exercise => exercise.id === state.selectedExercise.id);

      if (exerciseIndex !== -1) {
        const series = state.unfinishedExercises[exerciseIndex].series;
        series[state.seriesIndex] = action.payload;

        const summaryExerciseIndex = state.trainingSummary.exercises.findIndex(
          exercise => exercise.id === state.selectedExercise.id
        );
        if (summaryExerciseIndex !== -1) {
          state.trainingSummary.exercises[summaryExerciseIndex].series.push(action.payload);
        } else {
          state.trainingSummary.exercises.push({
            id: state.selectedExercise.id,
            name: state.selectedExercise.name,
            loadIncrease: state.selectedExercise.loadIncrease,
            repsRange: state.selectedExercise.repsRange,
            series: [action.payload],
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
        time: Date.now() - state.startTime,
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
    NAVIGATE_TO_ADD_EXERCISE: state => {
      state.step = 'add';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateUserPlan.pending, state => {
        state.sendingTraining = true;
      })
      .addCase(updateUserPlan.fulfilled, state => {
        state.step = 'select';
        state.unfinishedExercises = [];
        state.finishedExercises = [];
        state.lastActivity = null;
        state.sendingTraining = false;
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
  NAVIGATE_TO_ADD_EXERCISE,
} = trainingSlice.actions;
export default trainingSlice.reducer;
