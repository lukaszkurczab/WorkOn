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
    selectedWorkout: undefined,
    isError: false,
  },
  reducers: {
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedWorkout = { ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.selectedWorkout = {
        id: action.payload.plans[0].id,
        name: action.payload.plans[0].name,
        days: action.payload.plans[0].days,
      };
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { SET_SELECTED_PLAN } = userSlice.actions;

export default userSlice.reducer;
