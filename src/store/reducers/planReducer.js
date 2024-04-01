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
  },
});

export const { SET_PLAN_TO_EDIT, SET_PLAN_TO_PREVIEW, CHANGE_PLAN_NAME, EDIT_EXERCISE, CHANGE_DAY_NAME } = plans.actions;

export default plans.reducer;
