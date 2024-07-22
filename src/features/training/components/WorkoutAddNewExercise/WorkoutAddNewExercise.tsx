import React from 'react';
import { View } from 'react-native';
import styles from './WorkoutAddNewExercise.styles';
import { Typography } from '../../../../components/Typography/Typography';
import ExerciseList from '../../../../components/ExerciseList/ExerciseList';

type WorkoutAddNewExerciseProps = {};

const WorkoutAddNewExercise = ({}: WorkoutAddNewExerciseProps) => {
  return (
    <View>
      <Typography variant="h3">Add new</Typography>
    </View>
  );
};

export default WorkoutAddNewExercise;
