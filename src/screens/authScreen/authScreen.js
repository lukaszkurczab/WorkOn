import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, ActivityIndicator } from 'react-native';
import { login } from '../../store/actions/userActions';
import styles from './authScreen.styles';

const AuthScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email, password, rememberMe } = useSelector(state => state.session);

  useEffect(() => {
    const authenticateUser = async () => {
      if (rememberMe) {
        try {
          await dispatch(login({ email: email, password: password }));
          navigation.navigate('MainScreen');
        } catch {
          navigation.navigate('LoginScreen');
        }
      } else {
        navigation.navigate('LoginScreen');
      }
    };

    authenticateUser();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color='#06f' size='large' />
    </View>
  );
};

export default AuthScreen;
