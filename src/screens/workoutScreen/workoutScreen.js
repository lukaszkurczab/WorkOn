import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './workoutScreen.styles';
import WorkoutMain from '../../components/workoutMain/workoutMain';

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <WorkoutMain/>
    </View>
  );
};

export default WorkoutScreen;