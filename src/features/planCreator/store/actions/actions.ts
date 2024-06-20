import { addPlan } from '../../../../api/plans';
import { WorkoutPlan } from '../../../../types/plans';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const createPlan = createAppAsyncThunk(
  'plans/addPlan',
  async (data: { userId: string; newPlan: WorkoutPlan }) => {
    return await addPlan(data);
  }
);
