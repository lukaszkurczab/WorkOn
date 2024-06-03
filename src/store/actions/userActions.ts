import {
  removePlanFromUser,
  editUserPlan,
  addHistoryItemToUser,
  loginUser,
  updateUserUsername,
  setPublicPlan,
  setPublicHistoryItem,
  updateUserPassword,
  getPublicPlans,
  getPublicRecords,
  getPublicHistoryItems,
} from '../../api/users';
import { createAppAsyncThunk } from '../../utility/createAppAsyncThunk';

export const removePlan = createAppAsyncThunk('user/removePlan', removePlanFromUser);
export const editPlan = createAppAsyncThunk('user/editPlan', editUserPlan);
export const addHistoryItem = createAppAsyncThunk('user/addHistoryItem', addHistoryItemToUser);
export const login = createAppAsyncThunk('user/login', loginUser);
export const changeUsername = createAppAsyncThunk('user/changeUsername', updateUserUsername);
export const updatePublicPlan = createAppAsyncThunk('user/updatePublicPlan', setPublicPlan);
export const updatePublicHistoryItem = createAppAsyncThunk('user/updatePublicHistoryItem', setPublicHistoryItem);
export const updatePassword = createAppAsyncThunk('user/updatePassword', updateUserPassword);
export const getUserPlans = createAppAsyncThunk('user/getUserPlans', getPublicPlans);
export const getUserRecords = createAppAsyncThunk('user/getUserRecords', getPublicRecords);
export const getUserHistoryItems = createAppAsyncThunk('user/getUserHistoryItems', getPublicHistoryItems);

// export const progressTraining = createAppAsyncThunk(
//   'progressTraining',
//   async (data: {
//     userId: string;
//     plan: { id: string; dayIndex: number; plans: WorkoutPlan[]; finishedExercises: { id: string; series: Series[] }[] };
//   }) => {
//     const { id, dayIndex, plans, finishedExercises } = data.plan;

//     let planToUpdate = { ...plans.find(plan => plan.id === id) };
//     const dayToUpdate = planToUpdate.days[dayIndex];
//     const updatedDayExercises = dayToUpdate.exercises.map(exercise => {
//       const finishedExercise = finishedExercises.find(i => i.id === exercise.id);
//       if (finishedExercise) {
//         return finishedExercise.series.every(
//           i => i.reps >= exercise.series[i.id - 1].reps && i.weight >= exercise.series[i.id - 1].weight
//         )
//           ? {
//               id: exercise.id,
//               loadIncrease: exercise.loadIncrease,
//               repsRange: exercise.repsRange,
//               series: finishedExercise.series.map(serie => ({
//                 id: serie.id,
//                 reps: serie.reps >= exercise.repsRange[1] ? exercise.repsRange[0] : serie.reps + 1,
//                 weight:
//                   serie.reps >= exercise.repsRange[1]
//                     ? Number(serie.weight) + Number(exercise.loadIncrease)
//                     : serie.weight,
//               })),
//             }
//           : exercise;
//       } else {
//         return exercise;
//       }
//     });

//     planToUpdate = {
//       ...planToUpdate,
//       days: planToUpdate.days.map((day, index) =>
//         index === dayIndex ? { ...day, exercises: updatedDayExercises } : day
//       ),
//     };

//     const res = await editUserPlan({ userId: data.userId, plan: planToUpdate });
//     return res;
//   }
// );
