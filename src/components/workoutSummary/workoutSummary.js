import React from 'react';
import { View, Text } from 'react-native';
import styles from './workoutSummary.styles';

const WorkoutSummary = ({workout}) => {
  return (
    <View style={styles.container}>
      <Text>Podsumowanie</Text>
    </View>
  );
};

export default WorkoutSummary;