import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../../api/users';

const user = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    selectedPlan: '',
    plans: [],
    history: [],
  },
  reducers: {
    LOGIN_USER: async (state, action) => {
      const newState = await fetchUser(action.payload);
      state.user.id = newState.id;
    },
  },
});

export const { LOGIN_USER } = user.actions;

export default user.reducer;
