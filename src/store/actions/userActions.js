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
  getUserByToken,
  getPublicPlans,
  getPublicRecords,
  getPublicHistoryItems,
} from '../../api/users';
import { createAppAsyncThunk } from '../utils/createAppAsyncThunk';

export const removePlan = createAppAsyncThunk('user/removePlan', removePlanFromUser);
export const editPlan = createAppAsyncThunk('user/editPlan', editUserPlan);
export const addHistoryItem = createAppAsyncThunk('user/addHistoryItem', addHistoryItemToUser);
export const register = createAppAsyncThunk('user/register', registerUser);
export const login = createAppAsyncThunk('user/login', loginUser);
export const changeUsername = createAppAsyncThunk('user/changeUsername', updateUserUsername);
export const updatePublicPlan = createAppAsyncThunk('user/updatePublicPlan', setPublicPlan);
export const updatePublicHistoryItem = createAppAsyncThunk('user/updatePublicHistoryItem', setPublicHistoryItem);
export const updateUserRecords = createAppAsyncThunk('user/updateUserRecords', setUserRecords);
export const updatePassword = createAppAsyncThunk('user/updatePassword', updateUserPassword);
export const authUser = createAppAsyncThunk('user/authUser', getUserByToken);
export const getUserPlans = createAppAsyncThunk('user/getUserPlans', getPublicPlans);
export const getUserRecords = createAppAsyncThunk('user/getUserRecords', getPublicRecords);
export const getUserHistoryItems = createAppAsyncThunk('user/getUserHistoryItems', getPublicHistoryItems);
export const progressTraining = createAppAsyncThunk('progressTraining', async data => {
  const { id, dayIndex, plans, finishedExercises } = data.plan;

  let planToUpdate = { ...plans.filter(plan => plan.id === id)[0] };
  const dayToUpdate = planToUpdate.days[dayIndex];
  const updatedDayExercises = dayToUpdate.exercises.map(exercise => {
    const finishedExercise = finishedExercises.filter(i => i.id === exercise.id)[0];
    if (finishedExercise) {
      return finishedExercise.series.every(i => i.reps >= exercise.series[i.id - 1].reps && i.weight >= exercise.series[i.id - 1].weight)
        ? {
            id: exercise.id,
            loadIncrease: exercise.loadIncrease,
            repsRange: exercise.repsRange,
            series: finishedExercise.series.map(serie => ({
              id: serie.id,
              reps: serie.reps >= exercise.repsRange[1] ? exercise.repsRange[0] : serie.reps + 1,
              weight: serie.reps >= exercise.repsRange[1] ? Number(serie.weight) + Number(exercise.loadIncrease) : serie.weight,
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
