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
