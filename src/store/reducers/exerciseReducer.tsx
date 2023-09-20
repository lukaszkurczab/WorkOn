import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { Exercise } from "../../types/exercise";
import { Muscles, MusclesGroup } from "../../types/muscles";

interface initialState {
  exercises: Exercise[]
}

const initialState: initialState = {
  exercises: [{
    id: "1",
    name: "string",
    descripion: "string",
    group: MusclesGroup.back,
    muscleMain: [Muscles.quadriceps],
    muscleAdditional: [Muscles.quadriceps],
    image: "",
  }],
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
