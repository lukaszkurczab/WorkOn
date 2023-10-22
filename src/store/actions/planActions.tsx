import { Plan } from "../../types/plan";

export const addPlan = (plan: Plan) => ({
  type: 'ADD_EXERCISE',
  payload: plan,
});

export const removePlan = (planId: string) => ({
  type: 'REMOVE_EXERCISE',
  payload: planId,
});
