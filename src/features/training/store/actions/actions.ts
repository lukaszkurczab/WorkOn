import { addHistoryItemToUser, editUserPlan } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { HistoryItem } from '../../../../types/history';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const addHistoryItem = createAppAsyncThunk(
  'user/addHistoryItem',
  async (userData: { userId: string; historyItem: HistoryItem }) => {
    return await addHistoryItemToUser(userData);
  }
);

export const updateUserPlan = createAppAsyncThunk(
  'user/updatePlan',
  async (userData: { userId: string; plan: WorkoutPlan }) => {
    return await editUserPlan(userData);
  }
);
