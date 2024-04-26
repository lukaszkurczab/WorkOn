import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from 'react-native';
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
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
