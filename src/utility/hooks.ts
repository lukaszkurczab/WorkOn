import { useDispatch as useReduxDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { exercisesList } from '../assets/exercises/_exercise';
import { ExerciseData } from '../types/exercises';

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
  exercisesList.map(group => {
    group.exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        exerciseToReturn = exercise;
      }
    });
  });

  if (!exerciseToReturn) {
    console.log(exerciseId);
    throw new Error('Exercise not found');
  }

  return exerciseToReturn;
};

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
