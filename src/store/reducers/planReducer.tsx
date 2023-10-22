import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { plans } from "../db/plans";
import { Plan } from "../../types/plan";

interface initialState {
  plans: Plan[]
}

const initialState: initialState = {
  plans: plans,
};

const planReducer: Reducer<initialState, any> = (state = initialState, action: PayloadAction<Plan>) => {
  switch (action.type) {
    case 'ADD_PLAN':
      return {
        ...state,
        plans: [...state.plans, action.payload],
      };
    case 'GET_PLANS':
      return {
        ...state,
        plans: [...state.plans],
      };
    case 'REMOVE_PLAN':
      return {
        ...state,
        plans: state.plans.filter((plan: { id: string; }) => plan.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default planReducer;
