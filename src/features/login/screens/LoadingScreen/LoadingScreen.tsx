import React from 'react';
import { View, Image, ActivityIndicator, Text, Dimensions } from 'react-native';
import styles from './LoadingScreen.styles';

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  return (
    <View style={[styles.container, { paddingVertical: height * 0.1 }]}>
      <Image source={require('../../../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color="#06f" size="large" style={styles.indicator} />
      <Text style={styles.text}>Loading, please wait...</Text>
    </View>
  );
};

export default React.memo(LoadingScreen);
