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

export const useFormatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}