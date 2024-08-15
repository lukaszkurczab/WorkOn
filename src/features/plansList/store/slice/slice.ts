import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { WorkoutPlan } from '../../../../types/plans';
import { getAllPlans } from '../actions/actions';

export type PlansState = {
  selectedPlan: WorkoutPlan | null;
  publicPlans: WorkoutPlan[];
  loading: boolean;
  error: string | null;
};

const initialState: PlansState = {
  selectedPlan: null,
  publicPlans: [],
  loading: false,
  error: null,
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    SELECT_PLAN(state, action: PayloadAction<WorkoutPlan>) {
      state.selectedPlan = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllPlans.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPlans.fulfilled, (state, action: PayloadAction<WorkoutPlan[]>) => {
        state.publicPlans = action.payload;
        state.loading = false;
      })
      .addCase(getAllPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { SELECT_PLAN } = plansSlice.actions;
export default plansSlice.reducer;
