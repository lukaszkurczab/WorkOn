import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text, Alert, Image, ActivityIndicator } from 'react-native';
import Checkbox from '../../components/checkbox/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { SET_REMEMBER_ME, SET_IS_LOADING } from '../../store/slice/userSlice';
import { login } from '../../store/actions/userActions';
import styles from './loginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, token, userRemembered } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(SET_IS_LOADING());
    if (token) {
      navigation.navigate('MainScreen');
    }
  }, [token]);

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
  };

  const handleSignUp = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleRememberMe = () => {
    dispatch(SET_REMEMBER_ME());
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <Text style={styles.title}>WorkOn</Text>
      <TextInput
        placeholder='Email'
        placeholderTextColor='#aaa'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoComplete='email'
        inputMode='email'
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Password'
        placeholderTextColor='#aaa'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Checkbox selected={userRemembered} onClick={handleRememberMe}>
        <Text style={styles.checkboxText}>Remember me</Text>
      </Checkbox>
      <TouchableOpacity style={[styles.button, isLoading && styles.disabledButton]} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color='#06f' /> : <Text style={styles.buttonText}>Log in</Text>}
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        New user?{' '}
        <Text style={styles.signUpButton} onPress={handleSignUp}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
