import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from '../../../../utility/hooks';
import { register, login } from '../../store/actions/actions';
import { storeToken } from '../../../../utility/secureStore';
import { navigate } from '../../../../utility/navigate';
import Button from '../../../../components/Button/Button';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { Typography } from '../../../../components/Typography/Typography';
import Layout from '../../../../components/Layout/Layout';
import styles from './RegisterScreen.styles';
import { DECODE_USER_DATA } from '../../../../store/slice/userSlice';

interface ErrorState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const isPasswordComplex = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
};

const RegisterScreen: React.FC = () => {
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
    } else {
      setError(prevError => ({ ...prevError, email: '' }));
    }

    if (!isPasswordComplex(password)) {
      setError(prevError => ({ ...prevError, password: 'Password is too simple' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, password: '' }));
    }

    if (password !== confirmPassword) {
      setError(prevError => ({ ...prevError, confirmPassword: 'Passwords do not match' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, confirmPassword: '' }));
    }

    if (!hasError) {
      setIsLoading(true);
      try {
        await dispatch(register({ username, email, password })).unwrap();
        const response = await dispatch(login({ email, password })).unwrap();
        await storeToken('accessToken', response.accessToken);
        await storeToken('refreshToken', response.refreshToken);
        await storeToken('rememberMe', 'true');
        dispatch(DECODE_USER_DATA(response.accessToken));
        navigate('CarouselScreen', { firstLogin: true });
      } catch (err: any) {
        console.log(err);
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

  return (
    <Layout showNavigation={false}>
      <View style={styles.inputs}>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} error={error.username} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          error={error.email}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={error.password}
        />
        <View>
          <Typography variant="h5">Password should have:</Typography>
          <Typography variant="h5">{'\u2022'} At least 8 characters</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 upper case</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 lower case</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 number</Typography>
        </View>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          error={error.confirmPassword}
        />
      </View>
      <Button variant="contained" onPress={handleRegister} disabled={isLoading}>
        <Typography variant="h2">Register</Typography>
      </Button>
      <View style={styles.signInWrapper}>
        <Typography variant="h5">Already have an account? </Typography>
        <TouchableOpacity onPress={() => navigate('LoginScreen')}>
          <Typography variant="h4" style={styles.signInButton}>
            Log in
          </Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
