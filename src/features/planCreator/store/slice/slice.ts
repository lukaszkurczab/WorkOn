import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkoutPlan } from '../../../../types/plans';
import { Exercise, Series } from '../../../../types/exercises';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createPlan } from '../actions/actions';
import { navigate } from '../../../../utility/navigate';

export interface PlanCreatorState {
  error: string;
  newPlan: WorkoutPlan;
}

const initialState: PlanCreatorState = {
  error: '',
  newPlan: {
    id: '',
    name: '',
    publicType: '',
    allowedUsers: [],
    authorId: '',
    public: false,
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
};

const planCreatorSlice = createSlice({
  name: 'planCreator',
  initialState,
  reducers: {
    CREATE_NEW_PLAN: state => {
      const planId = uuidv4();
      const dayId = uuidv4();
      state.error = '';
      state.newPlan = {
        id: planId,
        name: '',
        publicType: 'private',
        allowedUsers: [],
        authorId: '',
        public: false,
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
      state.newPlan.name = action.payload;
    },
    CHANGE_DAY_NAME: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const index = state.newPlan.days.findIndex(day => day.id === action.payload.id);
      if (index !== -1) {
        state.newPlan.days[index].name = action.payload.name;
      }
    },
    REMOVE_DAY: (state, action: PayloadAction<string>) => {
      if (state.newPlan.days.length > 1) {
        state.newPlan.days = state.newPlan.days.filter(day => day.id !== action.payload);
      } else {
        state.error = 'Plan must have at least one day.';
      }
    },
    ADD_DAY: state => {
      const dayId = uuidv4();
      state.newPlan.days.push({
        id: dayId,
        name: '',
        exercises: [],
      });
    },
    ADD_EXERCISE_TO_PLAN: (state, action: PayloadAction<{ dayId: string; exercise: Exercise }>) => {
      const { dayId, exercise } = action.payload;
      const updatedNewPlan = { ...state.newPlan };
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
      state.newPlan = { ...updatedNewPlan };
    },
    UPDATE_EXERCISE_IN_PLAN: (state, action: PayloadAction<{ dayId: string; exercise: Exercise }>) => {
      const { dayId, exercise } = action.payload;
      const dayIndex = state.newPlan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        const exerciseIndex = state.newPlan.days[dayIndex].exercises.findIndex(ex => ex.id === exercise.id);
        if (exerciseIndex !== -1) {
          state.newPlan.days[dayIndex].exercises[exerciseIndex] = exercise;
        }
      }
    },
    UNSELECT_EXERCISE: (state, action: PayloadAction<{ dayId: string; exerciseId: string }>) => {
      const { dayId, exerciseId } = action.payload;
      const dayIndex = state.newPlan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        state.newPlan.days[dayIndex].exercises = state.newPlan.days[dayIndex].exercises.filter(
          ex => ex.id !== exerciseId
        );
      }
    },
    REMOVE_SERIES: (state, action: PayloadAction<{ dayId: string; exerciseId: string; seriesIndex: number }>) => {
      const { dayId, exerciseId, seriesIndex } = action.payload;
      const dayIndex = state.newPlan.days.findIndex(day => day.id === dayId);
      if (dayIndex !== -1) {
        const exerciseIndex = state.newPlan.days[dayIndex].exercises.findIndex(ex => ex.id === exerciseId);
        if (exerciseIndex !== -1) {
          state.newPlan.days[dayIndex].exercises[exerciseIndex].series.splice(seriesIndex, 1);
        }
      }
    },
    VALIDATE_PLAN: state => {
      state.newPlan.days.forEach(day => {
        if (day.name === '') {
          state.error = 'Day must have name.';
        }
      });
      if (state.newPlan.name === '') {
        state.error = 'Plan must have name.';
      }
    },
    RESET_ERROR: state => {
      state.error = '';
    },
    SET_SELECTED_EXERCISE: (state, action: PayloadAction<{ dayIndex: number; selectedExercise: number }>) => {},
    EDIT_PLAN: (state, action) => {
      state.newPlan = { ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(createPlan.fulfilled, (state, action) => {
      navigate('MainScreen');
    });
  },
});

export const {
  VALIDATE_PLAN,
  ADD_EXERCISE_TO_PLAN,
  UPDATE_EXERCISE_IN_PLAN,
  CREATE_NEW_PLAN,
  CHANGE_PLAN_NAME,
  ADD_DAY,
  CHANGE_DAY_NAME,
  REMOVE_DAY,
  RESET_ERROR,
  SET_SELECTED_EXERCISE,
  UNSELECT_EXERCISE,
  REMOVE_SERIES,
  EDIT_PLAN,
} = planCreatorSlice.actions;

export default planCreatorSlice.reducer;
