import React from 'react';
import { useSelector } from "react-redux";
import { View } from 'react-native';
import styles from './workoutSummaryScreen.styles';
import WorkoutSummary from '../../components/workoutSummary/workoutSummary';

const WorkoutSummaryScreen = () => {
  const summary = useSelector((store) => store.trainingSummary.trainingSummary);

  console.log(summary)
  console.log(summary[summary.length-1])
  return (
    <View style={styles.container}>
      <WorkoutSummary />
    </View>
  );
};

export default WorkoutSummaryScreen;