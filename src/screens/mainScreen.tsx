import React from 'react';
import { View, Text } from 'react-native';
import styles from './mainScreen.styles';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to MyFitnessApp</Text>
        <Text style={styles.subtitle}>Plan your training and diet, and monitor your progress.</Text>
      </View>
      <View>
       <Text>Nav</Text>
      </View>
    </View>
  );
};

export default MainScreen;