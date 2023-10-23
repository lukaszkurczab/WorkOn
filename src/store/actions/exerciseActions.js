export const addExercise = (exercise) => ({
  type: 'ADD_EXERCISE',
  payload: exercise,
});

export const removeExercise = (exerciseId) => ({
  type: 'REMOVE_EXERCISE',
  payload: exerciseId,
});
