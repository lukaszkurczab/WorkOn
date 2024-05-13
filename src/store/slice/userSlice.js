import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  removePlanFromUser,
  editUserPlan,
  addHistoryItemToUser,
  registerUser,
  loginUser,
  updateUserUsername,
  setPublicPlan,
  setPublicHistoryItem,
  setUserRecords,
  updateUserPassword,
} from '../../api/users';

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
      return finishedExercise.series.every(
        i => i.reps >= exercise.series[i.id - 1].reps && i.weight >= exercise.series[i.id - 1].weight
      )
        ? {
            id: exercise.id,
            loadIncrease: exercise.loadIncrease,
            repsRange: exercise.repsRange,
            series: finishedExercise.series.map(serie => ({
              id: serie.id,
              reps: serie.reps >= exercise.repsRange[1] ? exercise.repsRange[0] : serie.reps + 1,
              weight:
                serie.reps >= exercise.repsRange[1]
                  ? Number(serie.weight) + Number(exercise.loadIncrease)
                  : serie.weight,
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
      index === dayIndex ? { name: day.name, restDay: day.restDay, exercises: updatedDayExercises } : day
    ),
  };

  const res = await editUserPlan(data.userId, planToUpdate);
  return res;
});

export const register = createAsyncThunk('register', async (userData, { rejectWithValue }) => {
  try {
    const res = await registerUser(userData);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('login', async (userData, { rejectWithValue }) => {
  try {
    const res = await loginUser(userData);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const changeUsername = createAsyncThunk('changeUsername', async (userData, { rejectWithValue }) => {
  try {
    const res = await updateUserUsername(userData);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updatePublicPlan = createAsyncThunk('updatePublicPlan', async data => {
  try {
    const res = await setPublicPlan(data.userId, data.itemId, data.isPublic);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updatePublicHistoryItem = createAsyncThunk('updatePublicHistoryItem', async data => {
  try {
    const res = await setPublicHistoryItem(data.userId, data.itemId, data.isPublic);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateUserRecords = createAsyncThunk('updateUserRecords', async data => {
  try {
    const res = await setUserRecords(data.userId, data.records);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updatePassword = createAsyncThunk('updatePassword', async (userData, { rejectWithValue }) => {
  try {
    const res = await updateUserPassword(userData.userId, userData.newPassword);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
    selectedPlan: undefined,
    errorMessage: '',
    token: null,
    userRemembered: false,
  },
  reducers: {
    SET_SELECTED_PLAN: (state, action) => {
      state.selectedPlan = action.payload;
    },
    CHANGE_PASSWORD: (state, action) => {
      console.log(action.payload.oldPassword);
      console.log(action.payload.newPassword);
      console.log(action.payload.confirmNewPassword);
    },
    SET_REMEMBER_ME: state => {
      state.userRemembered = !state.userRemembered;
    },
  },
  extraReducers: builder => {
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
      state.data.history = [...state.data.history, action.payload];
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
      const newPlans = [...state.data.plans];
      const index = newPlans.findIndex(plan => plan.id === action.payload.id);
      newPlans[index] = action.payload;
      state.data.plans = newPlans;
      state.isLoading = false;
    });
    builder.addCase(progressTraining.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isError = false;
      state.data = action.payload;
      state.selectedPlan = {
        id: action.payload.plans[0].id,
        name: action.payload.plans[0].name,
        img: action.payload.plans[0].img,
        planType: action.payload.plans[0].planType,
        days: action.payload.plans[0].days,
      };
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'Invalid email or password';
    });
    builder.addCase(changeUsername.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(changeUsername.fulfilled, (state, action) => {
      state.isError = false;
      state.data = { ...state.data, username: action.payload };
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(changeUsername.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'Username is already taken';
    });
    builder.addCase(updatePublicPlan.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updatePublicPlan.fulfilled, (state, action) => {
      state.isError = false;
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(updatePublicPlan.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updatePublicHistoryItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updatePublicHistoryItem.fulfilled, (state, action) => {
      state.isError = false;
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(updatePublicHistoryItem.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateUserRecords.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateUserRecords.fulfilled, (state, action) => {
      state.isError = false;
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(updateUserRecords.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updatePassword.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isError = false;
      state.errorMessage = '';
      state.isLoading = false;
    });
    builder.addCase(updatePassword.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { SET_SELECTED_PLAN, CHANGE_PASSWORD, SET_REMEMBER_ME } = userSlice.actions;

export default userSlice.reducer;
