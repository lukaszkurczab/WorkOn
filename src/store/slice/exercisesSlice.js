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

export default exercisesSlice.reducer;
