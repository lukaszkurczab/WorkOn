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
    ADD_PLAN: (state, action) => {
      state.plans = [...state.plans, action.payload];
    },
    DELETE_PLAN: (state, action) => {
      state.plans = state.plans.filter((plan) => plan.id !== action.payload);
    },
    EDIT_PLAN: (state, action) => {
      state.plans = [...state.plans, action.payload];
    },
    SET_PLAN_TO_EDIT: (state, action) => {
      state.planToEdit = state.plans.find((plan) => plan.id == action.payload)
    },
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = {...action.payload}
    }
  }
});

export const {
  SET_SELECTED_PLAN,
  SET_PLAN_TO_EDIT
} = plans.actions;

export default plans.reducer