import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './authScreen.styles';

const AuthScreen = () => {
  const navigation = useNavigation();
  const { token, userRemembered } = useSelector(state => state.user);

  useEffect(() => {
    if (userRemembered && token) {
      navigation.navigate('MainScreen');
    } else {
      navigation.navigate('LoginScreen');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color='#06f' size='large' />
    </View>
  );
};

export default AuthScreen;
