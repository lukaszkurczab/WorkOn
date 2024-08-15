import { fetchAllPlans } from '../../../../api/plans';
import { removePlanFromUser } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';
import { PlansState } from '../slice/slice';

export const removePlan = createAppAsyncThunk(
  'user/removePlan',
  async ({ userId, planId }: { userId: string; planId: string }) => {
    return await removePlanFromUser({ userId, planId });
  }
);

export const getAllPlans = createAppAsyncThunk<WorkoutPlan[], {}>('plans/getAllPlans', async () => {
  return await fetchAllPlans();
});
