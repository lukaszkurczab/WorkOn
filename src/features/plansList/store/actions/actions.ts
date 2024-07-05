import { removePlanFromUser } from '../../../../api/users';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const removePlan = createAppAsyncThunk(
  'user/removePlan',
  async ({ userId, planId }: { userId: string; planId: string }) => {
    return await removePlanFromUser({ userId, planId });
  }
);
