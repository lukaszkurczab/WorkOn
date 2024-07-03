import { addHistoryItemToUser, editUserPlan } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { WorkoutSession } from '../../../../types/users';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const addHistoryItem = createAppAsyncThunk(
  'user/addHistoryItem',
  async (userData: { userId: string; historyItem: WorkoutSession }) => {
    return await addHistoryItemToUser(userData);
  }
);

export const updateUserPlan = createAppAsyncThunk(
  'user/updatePlan',
  async (userData: { userId: string; plan: WorkoutPlan }) => {
    return await editUserPlan(userData);
  }
);
