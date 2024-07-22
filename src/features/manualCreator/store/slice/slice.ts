import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Day, WorkoutPlan } from '../../../../types/plans';
import { Exercise, ExerciseData, Series } from '../../../../types/exercises';
import { v4 as uuidv4 } from 'uuid';
import { createPlan } from '../actions/actions';
import { navigate } from '../../../../utility/navigate';

export interface ManualCreatorState {
  error: string;
  plan: WorkoutPlan;
  editExercise: Exercise;
}

const initialState: ManualCreatorState = {
  error: '',
  plan: {
    id: '',
    name: '',
    publicType: 'public',
    allowedUsers: [],
    authorId: '',
    days: [
      {
        id: '',
        name: '',
        exercises: [
          {
            id: '',
            name: '',
            repsRange: [4, 6],
            loadIncrease: 5,
            series: [
              {
                id: '',
                reps: 4,
                weight: 20,
              },
            ],
          },
        ],
      },
    ],
  },
  editExercise: {
    id: '',
    name: '',
    loadIncrease: 5,
    repsRange: [5, 10],
    series: [],
  },
};

const manualCreatorSlice = createSlice({
  name: 'manualCreator',
  initialState,
  reducers: {
    CREATE_NEW_PLAN: (state, action: PayloadAction<{ userId: string }>) => {
      const planId = uuidv4();
      const dayId = uuidv4();
      state.error = '';
      state.plan = {
        id: planId,
        name: '',
        publicType: 'private',
        allowedUsers: [],
        authorId: action.payload.userId,
        days: [
          {
            id: dayId,
            name: '',
            exercises: [],
          },
        ],
      };
    },
    CHANGE_PLAN_NAME: (state, action: PayloadAction<string>) => {
      state.plan.name = action.payload;
    },
    CHANGE_DAY_NAME: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const index = state.plan.days.findIndex(day => day.id === action.payload.id);
      if (index !== -1) {
        state.plan.days[index].name = action.payload.name;
      }
    },
    REMOVE_DAY: (state, action: PayloadAction<string>) => {
      if (state.plan.days.length > 1) {
        state.plan.days = state.plan.days.filter(day => day.id !== action.payload);
      } else {
        state.error = 'Plan must have at least one day.';
      }
    },
    ADD_DAY: state => {
      const dayId = uuidv4();
      state.plan.days.push({
        id: dayId,
        name: '',
        exercises: [],
      });
    },
    ADD_EXERCISE_TO_PLAN: (state, action: PayloadAction<{ dayId: string; exercise: Exercise }>) => {
      const { dayId, exercise } = action.payload;
      const updatedNewPlan = { ...state.plan };
      const dayIndex = updatedNewPlan.days.findIndex(day => day.id === dayId);

      if (dayIndex !== -1) {
        if (updatedNewPlan.days[dayIndex].exercises.every(ex => ex.id !== exercise.id)) {
          updatedNewPlan.days[dayIndex].exercises.push({
            ...exercise,
            series: exercise.series.map((serie: Series) => ({ ...serie, id: uuidv4() })),
          });
        } else {
          updatedNewPlan.days[dayIndex].exercises = updatedNewPlan.days[dayIndex].exercises.filter(
            ex => ex.id !== exercise.id
          );
        }
      }
      state.plan = { ...updatedNewPlan };
    },
    UPDATE_EXERCISE_IN_PLAN: (state, action: PayloadAction<{ dayId: string; exercise: Exercise }>) => {
      const { dayId, exercise } = action.payload;
      const dayIndex = state.plan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        const exerciseIndex = state.plan.days[dayIndex].exercises.findIndex(ex => ex.id === exercise.id);
        if (exerciseIndex !== -1) {
          state.plan.days[dayIndex].exercises[exerciseIndex] = exercise;
        }
      }
    },
    UNSELECT_EXERCISE: (state, action: PayloadAction<{ dayId: string; exerciseId: string }>) => {
      const { dayId, exerciseId } = action.payload;
      const dayIndex = state.plan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        state.plan.days[dayIndex].exercises = state.plan.days[dayIndex].exercises.filter(
          exercise => exercise.id !== exerciseId
        );
      }
    },
    REMOVE_SERIES: (state, action: PayloadAction<{ dayId: string; exerciseId: string; seriesIndex: number }>) => {
      const { dayId, exerciseId, seriesIndex } = action.payload;
      const dayIndex = state.plan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        const exerciseIndex = state.plan.days[dayIndex].exercises.findIndex(ex => ex.id === exerciseId);
        if (exerciseIndex !== -1) {
          state.plan.days[dayIndex].exercises[exerciseIndex].series.splice(seriesIndex, 1);
        }
      }
    },
    RESET_ERROR: state => {
      state.error = '';
    },
    SELECT_EXERCISE: (state, action: PayloadAction<{ day: Day; exercise: ExerciseData }>) => {
      const { day, exercise } = action.payload;
      const dayIndex = state.plan.days.findIndex(item => item.id === day.id);
      const updatedPlan = { ...state.plan };
      if (
        updatedPlan.days[dayIndex].exercises.findIndex(
          (exercise: Exercise) => exercise.id === action.payload.exercise.id
        ) === -1
      ) {
        updatedPlan.days[dayIndex].exercises.push({
          id: exercise.id,
          name: exercise.name,
          repsRange: [4, 6],
          loadIncrease: 5,
          series: [
            {
              id: '',
              reps: 4,
              weight: 20,
            },
          ],
        });
      } else {
        updatedPlan.days[dayIndex].exercises = updatedPlan.days[dayIndex].exercises.filter(
          exercise => exercise.id !== action.payload.exercise.id
        );
      }
      state.plan = { ...updatedPlan };
    },
    EDIT_PLAN: (state, action) => {
      state.plan = { ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(createPlan.fulfilled, () => {
      navigate('MainScreen');
    });
  },
});

export const {
  ADD_EXERCISE_TO_PLAN,
  UPDATE_EXERCISE_IN_PLAN,
  CREATE_NEW_PLAN,
  CHANGE_PLAN_NAME,
  ADD_DAY,
  CHANGE_DAY_NAME,
  REMOVE_DAY,
  RESET_ERROR,
  SELECT_EXERCISE,
  UNSELECT_EXERCISE,
  REMOVE_SERIES,
  EDIT_PLAN,
} = manualCreatorSlice.actions;

export default manualCreatorSlice.reducer;
