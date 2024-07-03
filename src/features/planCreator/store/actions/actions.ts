import { addPlan } from '../../../../api/plans';
import { addPlanToUser } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const createPlan = createAppAsyncThunk(
  'plans/addPlan',
  async (data: { userId: string; newPlan: WorkoutPlan }) => {
    await addPlanToUser(data);
    return await addPlan(data);
  }
);
