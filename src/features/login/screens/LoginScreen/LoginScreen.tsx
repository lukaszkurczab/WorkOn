import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import { Typography } from '../../../../components/Typography/Typography';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import Button from '../../../../components/Button/Button';
import Layout from '../../../../components/Layout/Layout';
import styles from './LoginScreen.styles';
import { loginUser } from '../../../../api/users';
import { storeToken, removeToken } from '../../../../utility/secureStore';
import { useDispatch } from '../../../../utility/hooks';
import { DECODE_USER_DATA } from '../../../../store/slice/userSlice';
import { getUserData } from '../../../../store/actions/userActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }, []);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
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
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

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
        />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} error={error} secureTextEntry />
      </View>
      <Checkbox selected={rememberMe} onClick={handleRememberMe}>
        <Typography variant="h6">Remember me</Typography>
      </Checkbox>
      <View style={styles.button}>
        <Button variant="contained" onPress={handleLogin} disabled={isLoading}>
          <Typography variant="h2">Log in</Typography>
        </Button>
      </View>
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
