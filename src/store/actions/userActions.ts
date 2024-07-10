import { getData } from '../../api/users';
import { createAppAsyncThunk } from '../../utility/createAppAsyncThunk';

export const getUserData = createAppAsyncThunk('user/getUserData', async (token: string) => {
  return await getData(token);
});
