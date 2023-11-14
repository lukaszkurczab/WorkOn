import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGetExercise } from '../../../utils/hooks';
import styles from './exercisesList.styles'


const ExercisesList = ({ exercises, onClick }) => {
  return (
    <View style={styles.container} >
      {exercises.map((exercise => {
        const exerciseName = useGetExercise(exercise.id)
        return <TouchableOpacity style={styles.exerciseRow} key={exercise.id} onPress={() => onClick(exercise.id)}>
                  <Text style={styles.rowText}>{exerciseName.name}</Text>
                </TouchableOpacity>
      }))}
    </View>
  );
};

export default ExercisesList;