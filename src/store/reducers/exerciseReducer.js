import { createSlice } from "@reduxjs/toolkit";
import { exercises as exercisesList} from "../db/exerciseList";

const exercises = createSlice({
  name: "exercises",
  initialState: {
    exercises: exercisesList,
    selectedGroup: 'back',
    selectedExercises: exercisesList.filter((exercise) => exercise.groups.includes('back')),
    selectedExercise: exercisesList[0]
  },
  reducers: {
    ADD_EXERCISE: (state, action) => {
      state.exercises = [...state.exercises, action.payload];
    },
    SET_SELECTED_GROUP: (state, action) => {
      state.selectedGroup = action.payload.group
      state.selectedExercises = exercisesList.filter((exercise) => exercise.groups.includes(action.payload.group.toLowerCase()))
    },
    SET_SELECTED_EXERCISE: (state, action) => {
      state.selectedExercise = state.exercises.find((exercise) => exercise.id == action.payload)
    }
  }
});

export const {
  ADD_EXERCISE,
  SET_SELECTED_GROUP,
  SET_SELECTED_EXERCISE
} = exercises.actions;

export default exercises.reducer
