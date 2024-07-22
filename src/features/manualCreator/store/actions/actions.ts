import { addPlanToUser } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

interface AddPlanToUserData {
  userId: string;
  newPlan: WorkoutPlan;
}

export const createPlan = createAppAsyncThunk<WorkoutPlan, AddPlanToUserData>(
  'plans/addPlan',
  async (data: AddPlanToUserData) => {
    const response = await addPlanToUser(data);
    return response; // Assuming response is of type WorkoutPlan
  }
);
