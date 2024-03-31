import { createSlice } from '@reduxjs/toolkit';

const atlas = createSlice({
  name: 'atlas',
  initialState: {
    selectedGroup: 'Select group',
  },
  reducers: {
    SET_SELECTED_GROUP: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { SET_SELECTED_GROUP } = atlas.actions;

export default atlas.reducer;
