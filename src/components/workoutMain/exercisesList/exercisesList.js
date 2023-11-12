import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGetExerciseName } from '../../../utils/hooks';
import styles from './exercisesList.styles'


const ExercisesList = ({ exercises, display }) => {
  return (
    display && <View style={styles.container} >
      {exercises.map((exercise => {
        const exerciseName = useGetExerciseName(exercise.id)
        return <Text key={exercise.id}>{exerciseName}</Text>
      }))}
    </View>
  );
};

export default ExercisesList;