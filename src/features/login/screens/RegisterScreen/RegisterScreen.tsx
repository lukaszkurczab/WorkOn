import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import Button from '../../../../components/Button/Button';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { Typography } from '../../../../components/Typography/Typography';
import Header from '../../../../components/Header/Header';
import styles from './RegisterScreen.styles';

interface ErrorState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const isPasswordComplex = (password: string): boolean => {
  const minLength = 8;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return password.length >= minLength && hasLowerCase && hasUpperCase && hasNumber;
};

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<ErrorState>({ username: '', email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    if (isPasswordComplex(password)) {
      setError({ ...error, password: 'Passwords is too simply' });
    } else if (password !== confirmPassword) {
      setError({ ...error, confirmPassword: 'Passwords not match' });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
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
    </View>
  );
};

export default RegisterScreen;
