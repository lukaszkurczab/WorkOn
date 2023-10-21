import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { exercises } from "../db/exerciseList";
import { Exercise } from "../../types/exercise";
import { Muscles, MusclesGroup } from "../../types/muscles";

interface initialState {
  exercises: Exercise[]
}

const initialState: initialState = {
  exercises: exercises,
};

const exerciseReducer: Reducer<initialState, any> = (state = initialState, action: PayloadAction<Exercise>) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case 'GET_EXERCISES':
      return {
        ...state,
        exercises: [...state.exercises],
      };
    case 'REMOVE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.filter((exercise: { id: string; }) => exercise.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default exerciseReducer;
