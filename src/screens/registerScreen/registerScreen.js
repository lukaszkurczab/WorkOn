import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/userActions';
import styles from './registerScreen.styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
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
    await dispatch(register({ name, email, password }));

    if (isError) {
      Alert.alert('Registration Error', errorMessage, [{ text: 'OK' }]);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WorkOn</Text>
      <TextInput placeholder='Name' placeholderTextColor='#aaa' value={name} onChangeText={setName} style={styles.input} />
      <TextInput
        placeholder='Email'
        placeholderTextColor='#aaa'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
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
      <TextInput
        placeholder='Confirm Password'
        placeholderTextColor='#aaa'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        Already have an account?{' '}
        <Text style={styles.signInButton} onPress={() => navigation.navigate('LoginScreen')}>
          Log in
        </Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
