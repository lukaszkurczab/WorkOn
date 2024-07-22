import React from 'react';
import { View, Image, ActivityIndicator, Text, Dimensions } from 'react-native';
import styles from './LoadingScreen.styles';
import { blue } from '../../../../styles/colors';
import { Typography } from '../../../../components/Typography/Typography';

const { height } = Dimensions.get('window');

const LoadingScreen = () => {
  return (
    <View style={[styles.container, { paddingVertical: height * 0.1 }]}>
      <Image source={require('../../../../assets/work.png')} style={styles.image} />
      <ActivityIndicator color={blue} size="large" style={styles.indicator} />
      <Typography variant="h3">Loading, please wait...</Typography>
    </View>
  );
};

export default React.memo(LoadingScreen);
