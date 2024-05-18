import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_LOADING } from '../../store/slice/userSlice';
import { SET_REMEMBER_ME, REMEMBER_USER } from '../../store/slice/sessionSlice';
import { login } from '../../store/actions/userActions';
import Checkbox from '../../components/checkbox/checkbox';
import Button from '../../components/buttons/button/button';
import styles from './loginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLoading, data } = useSelector(state => state.user);
  const rememberMe = useSelector(state => state.session.rememberMe);
  const session = useSelector(state => state.session);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (data.email !== undefined && data.password !== undefined) {
      navigation.navigate('MainScreen');
    }
  }, [data]);

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
      <Button onPress={handleLogin} disabled={isLoading} isLoading={isLoading} text='Log in' />
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
