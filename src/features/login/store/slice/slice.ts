import { createSlice } from '@reduxjs/toolkit';
import { register, login } from '../actions/actions';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    data: {
      plans: [],
      history: [],
    },
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
