import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import Checkbox from '../../components/checkbox/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_LOADING } from '../../store/slice/userSlice';
import { SET_REMEMBER_ME, REMEMBER_USER } from '../../store/slice/sessionSlice';
import { login } from '../../store/actions/userActions';
import styles from './loginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLoading, token } = useSelector(state => state.user);
  const rememberMe = useSelector(state => state.session.rememberMe);
  const session = useSelector(state => state.session);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(SET_IS_LOADING());
    if (token) {
      navigation.navigate('MainScreen');
    }
  }, [token]);

  const handleLogin = async () => {
    dispatch(REMEMBER_USER({ email: email, password: password }));
    dispatch(login({ email, password }));
  };

  const handleRememberMe = () => {
    dispatch(SET_REMEMBER_ME(!rememberMe));
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
      <Checkbox selected={rememberMe} onClick={handleRememberMe}>
        <Text style={styles.checkboxText}>Remember me</Text>
      </Checkbox>
      <TouchableOpacity style={[styles.button, isLoading && styles.disabledButton]} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color='#06f' /> : <Text style={styles.buttonText}>Log in</Text>}
      </TouchableOpacity>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpText}>New user? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
