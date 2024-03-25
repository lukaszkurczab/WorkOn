import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser, removePlanFromUser, editUserPlan, addHistoryItemToUser } from '../../api/users';

export const getUser = createAsyncThunk('getUser', async id => {
  const res = await fetchUser(id);
  return res;
});

export const removePlan = createAsyncThunk('removePlan', async data => {
  const res = await removePlanFromUser(data.userId, data.planId);
  return res;
});

export const editPlan = createAsyncThunk('editPlan', async data => {
  const res = await editUserPlan(data.userId, data.plan);
  return res;
});

export const addHistoryItem = createAsyncThunk('addHistoryItem', async data => {
  const res = await addHistoryItemToUser(data.id, data.historyItem);
  return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    selectedPlan: undefined,
  },
  reducers: {
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = [];
      state.data = action.payload;
      state.selectedPlan = Object.assign({
        id: action.payload.plans[0].id,
        name: action.payload.plans[0].name,
        img: action.payload.plans[0].img,
        planType: action.payload.plans[0].planType,
        days: action.payload.plans[0].days,
      });
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(removePlan.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removePlan.fulfilled, (state, action) => {
      state.data.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(removePlan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(editPlan.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editPlan.fulfilled, (state, action) => {
      state.data.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(editPlan.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addHistoryItem.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addHistoryItem.fulfilled, (state, action) => {
      state.data.history = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addHistoryItem.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { SET_SELECTED_PLAN } = userSlice.actions;

export default userSlice.reducer;
