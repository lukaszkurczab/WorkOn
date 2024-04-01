import { createSlice } from '@reduxjs/toolkit';

const plans = createSlice({
  name: 'plans',
  initialState: {
    planToPreview: {},
    planToEdit: {},
    exerciseToEdit: null,
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
    SET_EXERCISE_TO_EDIT: (state, action) => {
      state.exerciseToEdit = action.payload;
    },
    EDIT_EXERCISE: (state, action) => {
      // const editedPlan = { ...state.planToEdit };
      // const dayIndex = editedPlan.days.findIndex(i => i.name === action.payload.activeDay);
      // const exerciseIndex = editedPlan.days[dayIndex].exercises.findIndex(i => i.id === action.payload.updatedExercise.id);
      // editedPlan.days[dayIndex].exercises[exerciseIndex] = action.payload.updatedExercise;
      // state.planToEdit = { ...editedPlan };
      state.exerciseToEdit = null;
    },
    EDIT_PLAN: (state, action) => {
      state.planToEdit = { ...action.payload };
    },
  },
});

export const { SET_PLAN_TO_EDIT, EDIT_PLAN, SET_PLAN_TO_PREVIEW, SET_EXERCISE_TO_EDIT, CHANGE_PLAN_NAME, EDIT_EXERCISE } = plans.actions;

export default plans.reducer;
