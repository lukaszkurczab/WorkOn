import { useState } from 'react';
import { useDispatch, useIsPasswordComplex, validateEmail } from '../../../utility/hooks';
import { register } from '../store/actions/actions';
import { removeToken, storeToken } from '../../../utility/secureStore';
import { navigate } from '../../../utility/navigate';
import { DECODE_USER_DATA } from '../../../store/slice/userSlice';
import { loginUser } from '../../../api/users';
import { getUserData } from '../../../store/actions/userActions';

interface ErrorState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [generalError, setGeneralError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email) {
      setEmailError('Email cannot be empty');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password cannot be empty');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) return;

    setIsLoading(true);
    setGeneralError('');
    try {
      const response = await loginUser({ email, password });
      await storeToken('accessToken', response.accessToken);
      await storeToken('refreshToken', response.refreshToken);
      if (rememberMe) {
        await storeToken('rememberMe', 'true');
      } else {
        await removeToken('rememberMe');
      }
      dispatch(DECODE_USER_DATA(response.accessToken));
      dispatch(getUserData(response.accessToken));
      navigate('MainScreen');
    } catch (error) {
      setGeneralError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    generalError,
    rememberMe,
    handleRememberMe,
    isLoading,
    handleLogin,
  };
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<ErrorState>({ username: '', email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    let hasError = false;

    if (!username.trim()) {
      setError(prevError => ({ ...prevError, username: 'Username is required' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, username: '' }));
    }

    if (!email.trim()) {
      setError(prevError => ({ ...prevError, email: 'Email is required' }));
      hasError = true;
    } else if (!validateEmail(email)) {
      setError(prevError => ({ ...prevError, email: 'Please enter a valid email address' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, email: '' }));
    }

    if (password !== confirmPassword) {
      setError(prevError => ({ ...prevError, confirmPassword: 'Passwords do not match' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, confirmPassword: '' }));
    }

    if (!useIsPasswordComplex(password)) {
      setError(prevError => ({ ...prevError, password: 'Password is too simple' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, password: '' }));
    }

    if (!hasError) {
      setIsLoading(true);
      try {
        await dispatch(register({ username, email, password })).unwrap();
        const response = await loginUser({ email, password });
        await storeToken('accessToken', response.accessToken);
        await storeToken('refreshToken', response.refreshToken);
        await storeToken('rememberMe', 'true');
        dispatch(DECODE_USER_DATA(response.accessToken));
        dispatch(getUserData(response.accessToken));
        navigate('CarouselScreen', { firstLogin: true });
      } catch (err: any) {
        if (err.message.includes('Username is taken')) {
          setError(prevError => ({ ...prevError, username: 'Username is taken' }));
        } else if (err.message.includes('Email is taken')) {
          setError(prevError => ({ ...prevError, email: 'Email is taken' }));
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    isLoading,
    handleRegister,
  };
};
