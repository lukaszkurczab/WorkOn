import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slice/userSlice';
import styles from './loginScreen.styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isError, errorMessage, token } = useSelector(state => state.user);

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
    if (token) {
      navigation.navigate('MainScreen');
    } else if (isError) {
      Alert.alert('Login Error', errorMessage, [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Log In" onPress={handleLogin} color={styles.button.backgroundColor} />
    </View>
  );
};

export default LoginScreen;
