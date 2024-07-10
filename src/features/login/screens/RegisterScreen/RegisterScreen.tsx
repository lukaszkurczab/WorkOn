import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import Button from '../../../../components/Button/Button';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { Typography } from '../../../../components/Typography/Typography';
import Layout from '../../../../components/Layout/Layout';
import styles from './RegisterScreen.styles';
import { useRegister } from '../../utility/hooks';

const RegisterScreen = () => {
  const {
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
  } = useRegister();

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
