import { createSlice } from "@reduxjs/toolkit";
import { plans as plansDB } from "../db/plans";
import { settings } from "../db/settings"

const plans = createSlice({
  name: "plans",
  initialState: {
    plans: plansDB,
    selectedPlan: settings.selectedPlan,
  },
  reducers: {
    ADD_PLAN: (state, action) => {
      state.plans = [...state.plans, action.payload];
    },
    DELETE_PLAN: (state, action) => {
      state.plans = state.plans.filter((plan) => {
        return plan.id !== action.payload;
      });
    },
    EDIT_PLAN: (state, action) => {
      state.plans = [...state.plans, action.payload];
    },
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = {
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img
      }
    },
  }
});

export const {
  SET_SELECTED_PLAN
} = plans.actions;

export default plans.reducer