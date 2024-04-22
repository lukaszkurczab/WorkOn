import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExercises } from '../../api/exercises';

export const getExercises = createAsyncThunk('getExercises', async lastVersion => {
  const res = await fetchExercises(lastVersion);
  return res;
});

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    isLoading: false,
    data: [],
    version: '1.0',
    isError: false,
    selectedExercise: '',
  },
  reducers: {
    SET_SELECTED_EXERCISE: (state, action) => {
      state.selectedExercise = state.data.find(exercise => exercise.id == action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getExercises.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getExercises.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getExercises.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { SET_SELECTED_EXERCISE } = exercisesSlice.actions;

export default exercisesSlice.reducer;
