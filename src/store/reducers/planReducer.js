import { createSlice } from "@reduxjs/toolkit";
import { plans as plansDB } from "../db/plans";
import { settings } from "../db/settings"

const plans = createSlice({
  name: "plans",
  initialState: {
    plans: plansDB,
    selectedPlan: settings.selectedPlan,
    planToEdit: {}
  },
  reducers: {
    CHANGE_PLAN_TYPE: (state, action) => {
      state.planToEdit.planType = action.payload;
    },
    SET_PLAN_TO_EDIT: (state, action) => {
      state.planToEdit = state.plans.find((plan) => plan.id == action.payload)
    },
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = {...action.payload}
    },
    ADD_DAY: (state, action) => {
      state.planToEdit.days = [...state.planToEdit.days, {
        name: action.payload,
        restDay: true,
        exercises: []
      }]
    },
    REMOVE_DAY: (state) => {
      state.planToEdit.days = state.planToEdit.days.slice(0, -1); 
    },
    EDIT_PLAN: (state, action) => {
      state.planToEdit = {...action.payload}
    }
  }
});

export const {
  SET_SELECTED_PLAN,
  SET_PLAN_TO_EDIT,
  CHANGE_PLAN_TYPE,
  ADD_DAY,
  REMOVE_DAY,
  EDIT_PLAN
} = plans.actions;

export default plans.reducer