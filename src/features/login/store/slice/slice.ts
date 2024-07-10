import { createSlice } from '@reduxjs/toolkit';
import { register } from '../actions/actions';
import { User } from '../../../../types/users';

interface LoginState {
  isLoading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: LoginState = {
  isLoading: false,
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default loginSlice.reducer;
