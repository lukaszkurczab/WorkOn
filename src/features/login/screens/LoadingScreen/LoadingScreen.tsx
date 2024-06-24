import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import styles from './LoadingScreen.styles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color="#06f" size="large" />
    </View>
  );
};

export default LoadingScreen;
