import { createSlice } from '@reduxjs/toolkit';
import _exercises from '../../assets/exercises/_exercises';

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    exercises: _exercises,
    selectedExercise: '',
  },
  reducers: {
    SET_SELECTED_EXERCISE: (state, action) => {
      state.selectedExercise = state.exercises.find(exercise => exercise.id == action.payload);
    },
  },
});

export const { SET_SELECTED_EXERCISE } = exercises.actions;

export default exercises.reducer;
