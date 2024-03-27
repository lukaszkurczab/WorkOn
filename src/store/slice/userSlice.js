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

export const progressTraining = createAsyncThunk('progressTraining', async data => {
  const { id, dayIndex, plans, finishedExercises } = data.plan;

  let planToUpdate = { ...plans.filter(plan => plan.id === id)[0] };
  const dayToUpdate = planToUpdate.days[dayIndex];
  const updatedDayExercises = dayToUpdate.exercises.map(exercise => {
    const finishedExercise = finishedExercises.filter(i => i.id === exercise.id)[0];
    if (finishedExercise) {
      return finishedExercise.series.every(i => i.reps >= exercise.series[i.id - 1].reps)
        ? {
            id: exercise.id,
            loadIncrease: exercise.loadIncrease,
            repsRange: exercise.repsRange,
            series: exercise.series.map(serie => ({
              id: serie.id,
              reps: serie.reps >= exercise.repsRange[1] ? exercise.repsRange[0] : serie.reps + 1,
              weight: serie.reps >= exercise.repsRange[1] ? serie.weight + exercise.loadIncrease : serie.weight,
            })),
          }
        : exercise;
    } else {
      return exercise;
    }
  });

  planToUpdate = {
    id: planToUpdate.id,
    img: planToUpdate.img,
    name: planToUpdate.name,
    planType: planToUpdate.planType,
    days: planToUpdate.days.map((day, index) =>
      index === dayIndex ? { name: day.name, restDay: day.restDay, exercises: updatedDayExercises } : day,
    ),
  };

  const res = await editUserPlan(data.userId, planToUpdate);
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
    builder.addCase(getUser.pending, state => {
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
    builder.addCase(getUser.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(removePlan.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(removePlan.fulfilled, (state, action) => {
      state.data.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(removePlan.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(editPlan.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editPlan.fulfilled, (state, action) => {
      state.data.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(editPlan.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addHistoryItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addHistoryItem.fulfilled, (state, action) => {
      state.data.history = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addHistoryItem.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(progressTraining.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(progressTraining.fulfilled, (state, action) => {
      state.data.plans = action.payload;
      state.isLoading = false;
    });
    builder.addCase(progressTraining.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { SET_SELECTED_PLAN } = userSlice.actions;

export default userSlice.reducer;
