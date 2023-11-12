import { plans } from "../store/db/plans"
import { exercises } from "../store/db/exerciseList"

export const useGetPlan = (planId) => {
  const plan = plans.find(plan => plan.id === planId)

  return plan
}

export const useGetExercise = (exerciseId) => {
  const exercise = exercises.find(exercise => exercise.id === exerciseId)

  return exercise
}

export const useGetExerciseName = (exerciseId) => {
  const exercise = exercises.find(exercise => exercise.id === exerciseId)

  return exercise.name
}