import { registerUser, loginUser } from '../../../../api/users';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';

export const register = createAppAsyncThunk(
  'user/register',
  async (userData: { username: string; email: string; password: string }) => {
    return await registerUser(userData);
  }
);

export const login = createAppAsyncThunk('user/login', async (userData: { email: string; password: string }) => {
  return await loginUser(userData);
});
