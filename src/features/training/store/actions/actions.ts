import { addHistoryItemToUser } from '../../../../api/users';
import { WorkoutSession } from '../../../../types/users';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const addHistoryItem = createAppAsyncThunk(
  'user/addHistoryItem',
  async (userData: { userId: string; historyItem: WorkoutSession }) => {
    return await addHistoryItemToUser(userData);
  }
);
