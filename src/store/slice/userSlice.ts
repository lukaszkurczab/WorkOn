import { createSlice } from '@reduxjs/toolkit';
import {
  removePlan,
  editPlan,
  addHistoryItem,
  register,
  login,
  changeUsername,
  updatePublicPlan,
  updatePublicHistoryItem,
  updatePassword,
  getUserPlans,
  getUserRecords,
  getUserHistoryItems,
} from '../actions/userActions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {
      plans: [],
      history: [],
    },
    selectedPlan: undefined,
    publicPlans: [],
    publicRecords: [],
    publicHistoryItems: [],
  },
  reducers: {
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = action.payload;
    },
    SET_IS_LOADING: state => {
      state.isLoading = false;
    },
    LOGOUT: state => {
      state.data = { plans: [], history: [] };
      state.selectedPlan = undefined;
      state.publicPlans = [];
      state.publicRecords = [];
      state.publicHistoryItems = [];
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(removePlan.fulfilled, (state, action) => {
      //   state.data.plans = state.data.plans.filter(plan => plan.id !== action.payload.id);
      // })
      // .addCase(editPlan.fulfilled, (state, action) => {
      //   state.data.plans = state.data.plans.map(plan => (plan.id === action.payload.id ? action.payload : plan));
      // })
      // .addCase(addHistoryItem.fulfilled, (state, action) => {
      //   state.data.history.push(action.payload);
      // })
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
        state.selectedPlan = action.payload.plans[0];
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
      })
      // .addCase(changeUsername.fulfilled, (state, action) => {
      //   state.data.username = action.payload;
      // })
      .addCase(updatePublicPlan.fulfilled, (state, action) => {
        state.publicPlans = action.payload.result;
      })
      .addCase(updatePublicHistoryItem.fulfilled, (state, action) => {
        state.publicHistoryItems = action.payload.result;
      })
      .addCase(updatePassword.fulfilled, state => {})
      .addCase(updatePassword.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getUserPlans.fulfilled, (state, action) => {
        state.publicPlans = action.payload;
      })
      .addCase(getUserRecords.fulfilled, (state, action) => {
        state.publicRecords = action.payload;
      })
      .addCase(getUserHistoryItems.fulfilled, (state, action) => {
        state.publicHistoryItems = action.payload;
      });
  },
});

export const { SET_SELECTED_PLAN, SET_IS_LOADING, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
