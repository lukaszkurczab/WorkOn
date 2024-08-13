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
  showNavigation: boolean;
}

const initialState: ManualCreatorState = {
  error: '',
  plan: {
    id: '',
    name: '',
    publicType: 'public',
    progression: '',
    allowedUsers: [],
    authorId: '',
    days: [],
    waves: [],
  },
  editExercise: {
    id: '',
    name: '',
    loadIncrease: 5,
    repsRange: [5, 10],
    series: [],
  },
  showNavigation: true,
};

const manualCreatorSlice = createSlice({
  name: 'manualCreator',
  initialState,
  reducers: {
    CREATE_NEW_PLAN: (state, action: PayloadAction<{ userId: string }>) => {
      const planId = uuidv4();
      const dayId = uuidv4();
      const waveId = uuidv4();
      state.error = '';
      state.plan = {
        id: planId,
        name: '',
        publicType: 'private',
        progression: '',
        allowedUsers: [],
        authorId: action.payload.userId,
        days: [
          {
            id: dayId,
            name: '',
            exercises: [],
          },
        ],
        waves: [
          {
            id: waveId,
            name: '',
            days: [dayId],
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
    CHANGE_EXERCISES_ORDER: (state, action: PayloadAction<{ dayId: string; newOrder: Exercise[] }>) => {
      const index = state.plan.days.findIndex(day => day.id === action.payload.dayId);
      if (index !== -1) {
        state.plan.days[index].exercises = action.payload.newOrder;
      }
    },
    CHANGE_PROGRESSION: (state, action: PayloadAction<string>) => {
      state.plan.progression = action.payload;
    },
    REMOVE_DAY: (state, action: PayloadAction<string>) => {
      const dayIdToRemove = action.payload;

      if (state.plan.days.length > 1) {
        state.plan.days = state.plan.days.filter(day => day.id !== dayIdToRemove);
        state.plan.waves.forEach(wave => {
          wave.days = wave.days.filter(dayId => dayId !== dayIdToRemove);
        });
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
    SELECT_EXERCISE: (state, action: PayloadAction<{ day: Day; exercises: Exercise[] }>) => {
      const { day, exercises } = action.payload;
      const dayIndex = state.plan.days.findIndex(item => item.id === day.id);
      const updatedPlan = { ...state.plan };
      updatedPlan.days[dayIndex].exercises = [...exercises];

      state.plan = { ...updatedPlan };
    },
    EDIT_PLAN: (state, action) => {
      state.plan = { ...action.payload };
    },
    SET_SHOW_NAVIGATION: (state, action) => {
      state.showNavigation = action.payload;
    },
    ADD_WAVE: state => {
      const waveId = uuidv4();
      const dayId = uuidv4();
      state.plan.days.push({
        id: dayId,
        name: '',
        exercises: [],
      });
      state.plan.waves.push({ id: waveId, name: '', days: [dayId] });
    },
    REMOVE_WAVE: (state, action: PayloadAction<string>) => {
      state.plan.waves = state.plan.waves.filter(wave => wave.id !== action.payload);
    },
    CHANGE_WAVE_NAME: (state, action: PayloadAction<{ waveId: string; waveName: string }>) => {
      const wave = state.plan.waves.find(w => w.id === action.payload.waveId);
      if (wave) {
        wave.name = action.payload.waveName;
      }
    },
    ASSIGN_DAY_TO_WAVE: (state, action: PayloadAction<{ waveId: string }>) => {
      const wave = state.plan.waves.find(w => w.id === action.payload.waveId);
      const dayId = uuidv4();
      state.plan.days.push({
        id: dayId,
        name: '',
        exercises: [],
      });
      if (wave) {
        wave.days.push(dayId);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(createPlan.fulfilled, () => {
      navigate('MainScreen');
    });
  },
});

export const {
  ADD_WAVE,
  CHANGE_WAVE_NAME,
  ASSIGN_DAY_TO_WAVE,
  REMOVE_WAVE,
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
  CHANGE_PROGRESSION,
  CHANGE_EXERCISES_ORDER,
  SET_SHOW_NAVIGATION,
} = manualCreatorSlice.actions;

export default manualCreatorSlice.reducer;
