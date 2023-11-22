import React from 'react';
import { View } from 'react-native';
import styles from './workoutSummaryScreen.styles';
import WorkoutSummary from '../../components/workoutSummary/workoutSummary';

const WorkoutSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <WorkoutSummary />
    </View>
  );
};

export default WorkoutSummaryScreen;