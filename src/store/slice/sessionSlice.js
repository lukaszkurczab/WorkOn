import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    email: '',
    password: '',
    rememberMe: false,
    selectedPlan: null,
    selectedDay: null,
    workout: null,
  },
  reducers: {
    REMEMBER_USER: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    SET_REMEMBER_ME: (state, action) => {
      state.rememberMe = action.payload;
    },
    SELECT_PLAN: (state, action) => {
      state.selectedPlan = action.payload;
    },
    SELECT_DAY: (state, action) => {
      state.selectedDay = action.payload;
    },
    SELECT_WORKOUT: (state, action) => {
      state.workout = action.payload;
    },
  },
});

export const { SET_REMEMBER_ME, REMEMBER_USER, SELECT_PLAN, SELECT_DAY, SELECT_WORKOUT } = sessionSlice.actions;
export default sessionSlice.reducer;
