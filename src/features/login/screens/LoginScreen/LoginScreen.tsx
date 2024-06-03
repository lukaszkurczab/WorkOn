import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import { Typography } from '../../../../components/Typography/Typography';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import Button from '../../../../components/Button/Button';
import Layout from '../../../../components/Layout/Layout';
import styles from './LoginScreen.styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    console.log('Login pressed');
  };

  return (
    <Layout showHeader={false} showNavigation={false}>
      <View style={styles.container}>
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
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            error={passwordError}
            secureTextEntry
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
        <View style={styles.text}>
          <Typography variant="h5">Don't remember password? </Typography>
          <TouchableOpacity onPress={() => {}}>
            <Typography variant="h4" style={styles.signUpButton}>
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
      </View>
    </Layout>
  );
};

export default LoginScreen;
