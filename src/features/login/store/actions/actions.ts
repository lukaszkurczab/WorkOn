import { registerUser } from '../../../../api/users';
import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';
import { User } from '../../../../types/users';

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

export const register = createAppAsyncThunk<User, RegisterUserData>('user/register', async userData => {
  return await registerUser(userData);
});
