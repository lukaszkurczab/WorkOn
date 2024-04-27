import { createSlice } from '@reduxjs/toolkit';

const plans = createSlice({
  name: 'plans',
  initialState: {
    planToPreview: {},
    planToEdit: {},
  },
  reducers: {
    CHANGE_PLAN_NAME: (state, action) => {
      state.planToEdit.name = action.payload;
    },
    SET_PLAN_TO_EDIT: (state, action) => {
      state.planToEdit = action.payload;
    },
    SET_PLAN_TO_PREVIEW: (state, action) => {
      state.planToPreview = action.payload;
    },
    EDIT_EXERCISE: (state, action) => {
      const editedPlan = { ...state.planToEdit };
      const dayIndex = editedPlan.days.findIndex(i => i.name === action.payload.dayName);
      const exerciseIndex = editedPlan.days[dayIndex].exercises.findIndex(i => i.id === action.payload.exerciseToEdit.id);
      editedPlan.days[dayIndex].exercises[exerciseIndex] = action.payload.exerciseToEdit;
      state.planToEdit = { ...editedPlan };
    },
    CHANGE_DAY_NAME: (state, action) => {
      const editedPlan = { ...state.planToEdit };
      const dayIndex = editedPlan.days.findIndex(i => i.name === action.payload.day.name);
      const newDay = { exercises: editedPlan.days[dayIndex].exercises, name: action.payload.dayName };
      editedPlan.days.splice(dayIndex, 1, newDay);
      state.planToEdit = { ...editedPlan };
    },
    CREATE_NEW_PLAN: state => {
      state.planToEdit = {
        name: 'New plan',
        img: 'string',
        days: [
          {
            name: 'Day 1',
            exercises: [],
          },
        ],
      };
    },
    ADD_EXERCISE: (state, action) => {
      const editedPlan = { ...state.planToEdit };
      const newExercises = [];
      action.payload.exercises.map(exercise => {
        newExercises.push({
          id: exercise.id,
          repsRange: [5, 8],
          loadIncrease: 5,
          series: [
            {
              reps: 6,
              weight: 60,
              id: 1,
            },
          ],
        });
      });
      const dayIndex = editedPlan.days.findIndex(i => i.name === action.payload.dayName);
      editedPlan.days[dayIndex].exercises = [...editedPlan.days[dayIndex].exercises, ...newExercises];
      state.planToEdit = { ...editedPlan };
    },
    ADD_DAY_TO_PLAN: state => {
      state.planToEdit = {
        name: state.planToEdit.name,
        img: state.planToEdit.img,
        days: [
          ...state.planToEdit.days,
          {
            name: `Day ${state.planToEdit.days.length + 1}`,
            exercises: [],
          },
        ],
      };
    },
    REMOVE_EXERCISE: (state, action) => {
      const { dayName, exerciseId } = action.payload;
      const selectedDayIndex = state.planToEdit.days.findIndex(day => day.name === dayName);
      const dayToEdit = {
        ...state.planToEdit.days[selectedDayIndex],
        exercises: state.planToEdit.days[selectedDayIndex].exercises.filter(exercise => exercise.id !== exerciseId),
      };
      state.planToEdit = {
        ...state.planToEdit,
        days: state.planToEdit.days.map(day => (day.name !== dayName ? day : dayToEdit)),
      };
    },
  },
});

export const {
  SET_PLAN_TO_EDIT,
  SET_PLAN_TO_PREVIEW,
  CHANGE_PLAN_NAME,
  EDIT_EXERCISE,
  CHANGE_DAY_NAME,
  CREATE_NEW_PLAN,
  ADD_DAY_TO_PLAN,
  ADD_EXERCISE,
  REMOVE_EXERCISE,
} = plans.actions;

export default plans.reducer;
