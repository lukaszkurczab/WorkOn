import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    selectedPlan: '',
    plans: [],
    history: [],
  },
});

export default user.reducer;
