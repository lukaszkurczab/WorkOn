import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, Alert, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slice/userSlice';
import styles from './loginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isError, errorMessage, token } = useSelector(state => state.user);

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
    if (token) {
      navigation.navigate('MainScreen');
    } else if (isError) {
      Alert.alert('Login Error', errorMessage, [{ text: 'OK' }]);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <Text style={styles.title}>WorkOn</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.input} keyboardType='email-address' />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <View style={styles.buttonWrapper}>
        <Button title='Log In' onPress={handleLogin} color={styles.button.backgroundColor} />
        <Button title='Sign Up' onPress={handleSignUp} color={styles.button.backgroundColor} />
      </View>
    </View>
  );
};

export default LoginScreen;
