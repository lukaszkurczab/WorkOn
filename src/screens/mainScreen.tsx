import React from 'react';
import { View, Text } from 'react-native';
import BigBanner from '../components/bigBanner/bigBanner';
import Header from '../components/header/header';
import styles from './mainScreen.styles';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <BigBanner/>
      <Text style={styles.title}>Welcome to MyFitnessApp</Text>
      <Text style={styles.subtitle}>Plan your training and diet, and monitor your progress.</Text>
    </View>
  );
};

export default MainScreen;