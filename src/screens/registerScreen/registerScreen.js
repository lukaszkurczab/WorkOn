import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/slice/userSlice';
import styles from './registerScreen.styles';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { isError, errorMessage } = useSelector(state => state.user);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Registration Error', 'Passwords do not match', [{ text: 'OK' }]);
      return;
    }
    await dispatch(register({ email, password }));

    if (isError) {
      Alert.alert('Registration Error', errorMessage, [{ text: 'OK' }]);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.input} keyboardType='email-address' />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title='Register' onPress={handleRegister} color={styles.button.backgroundColor} />
    </View>
  );
};

export default RegisterScreen;
