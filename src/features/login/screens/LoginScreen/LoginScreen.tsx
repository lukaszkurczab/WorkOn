import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import { Typography } from '../../../../components/Typography/Typography';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import Button from '../../../../components/Button/Button';
import Layout from '../../../../components/Layout/Layout';
import styles from './LoginScreen.styles';
import { useLogin } from '../../utility/hooks';

const LoginScreen = () => {
  const {
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
  } = useLogin();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <Layout showHeader={false} showNavigation={false}>
      <Image source={require('../../../../assets/work.png')} style={styles.image} />
      <Typography variant="h1">WorkOn</Typography>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
          error={emailError}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={passwordError}
        />
      </View>
      <Checkbox selected={rememberMe} onClick={handleRememberMe}>
        <Typography variant="h6">Remember me</Typography>
      </Checkbox>
      <View style={styles.button}>
        <Button variant="contained" onPress={handleLogin} disabled={isLoading}>
          <Typography variant="h2">Log in</Typography>
        </Button>
      </View>
      {generalError ? (
        <View style={styles.text}>
          <Typography variant="h5" style={{ color: 'red' }}>
            {generalError}
          </Typography>
        </View>
      ) : null}
      <View style={styles.text}>
        <Typography variant="h5">Don't remember password? </Typography>
        <TouchableOpacity onPress={() => {}}>
          <Typography variant="h5" style={styles.signUpButton}>
            Reset
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Typography variant="h5">New user? </Typography>
        <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
          <Typography variant="h5" style={styles.signUpButton}>
            Sign Up
          </Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LoginScreen;
