import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkoutPlan } from '../../../../types/plans';

type PlansState = {
  selectedPlan: WorkoutPlan | null;
};

const initialState: PlansState = {
  selectedPlan: null,
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    SELECT_PLAN(state, action: PayloadAction<WorkoutPlan>) {
      state.selectedPlan = action.payload;
    },
  },
});

export const { SELECT_PLAN } = plansSlice.actions;
export default plansSlice.reducer;
