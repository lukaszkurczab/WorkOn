export const addPlan = (plan) => ({
  type: 'ADD_EXERCISE',
  payload: plan,
});

export const removePlan = (planId) => ({
  type: 'REMOVE_EXERCISE',
  payload: planId,
});
