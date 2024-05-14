import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, ActivityIndicator } from 'react-native';
import { authUser } from '../../store/actions/userActions';
import styles from './authScreen.styles';

const AuthScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { token, userRemembered } = useSelector(state => state.user);

  useEffect(() => {
    const authenticateUser = async () => {
      if (userRemembered && token) {
        try {
          await dispatch(authUser(token));
          navigation.navigate('MainScreen');
        } catch {
          navigation.navigate('LoginScreen');
        }
      } else {
        navigation.navigate('LoginScreen');
      }
    };

    authenticateUser();
  }, [token, userRemembered]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color='#06f' size='large' />
    </View>
  );
};

export default AuthScreen;
