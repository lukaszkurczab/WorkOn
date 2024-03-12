import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from '../../api/users';

export const getUser = createAsyncThunk('getUser', async id => {
  const res = await fetchUser(id);
  return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: [],
    selectedWorkoutId: '',
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
