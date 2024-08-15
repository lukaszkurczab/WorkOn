import { useDispatch as useReduxDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import { exercisesList } from '../assets/exercises/_exercise';
import { Exercise, ExerciseData } from '../types/exercises';

export const useFormatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};

export const useGetExerciseData = (exerciseId: string): ExerciseData => {
  let exerciseToReturn;
  exercisesList.map(exercise => {
    if (exercise.id === exerciseId) {
      exerciseToReturn = exercise;
    }
  });

  if (!exerciseToReturn) {
    console.log(exerciseId);
    throw new Error('Exercise not found');
  }

  return exerciseToReturn;
};

export function updatePlanExercise(trainingExercise: Exercise, planExercise: Exercise): Exercise {
  const targetWeight = planExercise.series[0].weight;
  const targetReps = planExercise.series[0].reps;
  let updatedPlan = { ...planExercise };

  if (trainingExercise.series.length === planExercise.series.length) {
    if (trainingExercise.series.every(serie => serie.reps === targetReps && serie.weight === targetWeight)) {
      if (targetReps >= planExercise.repsRange[1]) {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: planExercise.repsRange[0],
            weight: serie.weight + planExercise.loadIncrease,
          })),
        };
      } else {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: serie.reps + 1,
            weight: serie.weight,
          })),
        };
      }
    } else if (
      trainingExercise.series.every(serie => serie.reps >= planExercise.repsRange[0] && serie.weight >= targetWeight)
    ) {
      const minWeight = Math.min(...trainingExercise.series.map(serie => serie.weight));
      const seriesWithMinWeight = trainingExercise.series.filter(serie => (serie.weight = minWeight));
      const minReps = Math.min(...seriesWithMinWeight.map(serie => serie.reps));

      if (minReps >= planExercise.repsRange[1]) {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: planExercise.repsRange[0],
            weight: minWeight + planExercise.loadIncrease,
          })),
        };
      } else {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: minReps + 1,
            weight: minWeight,
          })),
        };
      }
    } else if (trainingExercise.series.every(serie => serie.reps > targetReps && serie.weight === targetWeight)) {
      const minReps = Math.min(...trainingExercise.series.map(serie => serie.reps));

      if (minReps >= planExercise.repsRange[1]) {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: planExercise.repsRange[0],
            weight: serie.weight + planExercise.loadIncrease,
          })),
        };
      } else {
        updatedPlan = {
          ...updatedPlan,
          series: updatedPlan.series.map(serie => ({
            id: serie.id,
            reps: minReps + 1,
            weight: serie.weight,
          })),
        };
      }
    }
  }
  return updatedPlan;
}

export const useIsPasswordComplex = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useFormatDate = (dateInput: string | Date): string => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const useGenerateID = (): string => {
  return uuid.v4().toString();
};

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
