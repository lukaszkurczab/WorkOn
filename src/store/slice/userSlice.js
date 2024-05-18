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
  updateUserRecords,
  updatePassword,
  authUser,
  getUserPlans,
  getUserRecords,
  getUserHistoryItems,
} from '../actions/userActions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {},
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
  },
  extraReducers: builder => {
    builder
      .addCase(removePlan.fulfilled, (state, action) => {
        state.data.plans = action.payload;
      })
      .addCase(editPlan.fulfilled, (state, action) => {
        const editedPlans = state.data.plans.forEach(plan => {
          plan.id !== action.payload.id ? plan : action.payload;
        });

        state.data.plans = [...editedPlans];
      })
      .addCase(addHistoryItem.fulfilled, (state, action) => {
        state.data.history.push(action.payload);
      })
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
      .addCase(changeUsername.fulfilled, (state, action) => {
        state.data.username = action.payload;
      })
      .addCase(updatePublicPlan.fulfilled, (state, action) => {
        state.publicPlans = action.payload.result;
      })
      .addCase(updatePublicHistoryItem.fulfilled, (state, action) => {
        state.publicHistoryItems = action.payload.result;
      })
      .addCase(updateUserRecords.fulfilled, (state, action) => {
        state.publicRecords = action.payload;
      })
      .addCase(updatePassword.fulfilled, state => {})
      .addCase(updatePassword.rejected, state => {
        state.isLoading = false;
      })
      .addCase(authUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.selectedPlan = action.payload.plans[0];
        state.isLoading = false;
      })
      .addCase(authUser.rejected, state => {
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

export const { SET_SELECTED_PLAN, SET_IS_LOADING, CLEAR_TOKEN } = userSlice.actions;
export default userSlice.reducer;
