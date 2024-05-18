import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/userActions';
import Button from '../../components/buttons/button/button';
import styles from './registerScreen.styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { isError, isLoading, errorMessage } = useSelector(state => state.user);

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
      <Button disabled={isLoading} isLoading={isLoading} onPress={handleRegister} text='Register' />
      <View style={styles.signInWrapper}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signInButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
