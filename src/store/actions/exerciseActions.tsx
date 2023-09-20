import { Exercise } from "../../types/exercise";

export const addExercise = (exercise: Exercise) => ({
  type: 'ADD_EXERCISE',
  payload: exercise,
});

export const removeExercise = (exerciseId: string) => ({
  type: 'REMOVE_EXERCISE',
  payload: exerciseId,
});
