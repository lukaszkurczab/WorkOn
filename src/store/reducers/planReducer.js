import { createSlice } from '@reduxjs/toolkit';
import { settings } from '../db/settings';

const plans = createSlice({
  name: 'plans',
  initialState: {
    selectedPlan: settings.selectedPlan,
    planToPreview: {},
    planToEdit: {},
  },
  reducers: {
    CHANGE_PLAN_NAME: (state, action) => {
      state.planToEdit.name = action.payload;
    },
    CHANGE_PLAN_TYPE: (state, action) => {
      state.planToEdit.planType = action.payload;
    },
    SET_PLAN_TO_EDIT: (state, action) => {
      state.planToEdit = action.payload;
    },
    SET_PLAN_TO_PREVIEW: (state, action) => {
      state.planToPreview = action.payload;
    },
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = { ...action.payload };
    },
    ADD_DAY: (state, action) => {
      state.planToEdit.days = [
        ...state.planToEdit.days,
        {
          name: action.payload,
          restDay: true,
          exercises: [],
        },
      ];
    },
    REMOVE_DAY: state => {
      state.planToEdit.days = state.planToEdit.days.slice(0, -1);
    },
    EDIT_PLAN: (state, action) => {
      state.planToEdit = { ...action.payload };
    },
  },
});

export const {
  SET_SELECTED_PLAN,
  SET_PLAN_TO_EDIT,
  CHANGE_PLAN_TYPE,
  ADD_DAY,
  REMOVE_DAY,
  EDIT_PLAN,
  SET_PLAN_TO_PREVIEW,
  CHANGE_PLAN_NAME,
} = plans.actions;

export default plans.reducer;
