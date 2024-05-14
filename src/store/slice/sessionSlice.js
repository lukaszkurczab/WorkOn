import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    email: '',
    password: '',
    rememberMe: false,
  },
  reducers: {
    REMEMBER_USER: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    SET_REMEMBER_ME: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { SET_REMEMBER_ME, REMEMBER_USER } = sessionSlice.actions;
export default sessionSlice.reducer;
