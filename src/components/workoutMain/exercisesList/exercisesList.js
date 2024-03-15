import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './exercisesList.styles';

const ExercisesList = ({ exercises, onClick }) => {
  const exercisesList = useSelector(state => state.exercises.data);

  return (
    <View style={styles.container}>
      {exercises.map(exercise => {
        return (
          <TouchableOpacity style={styles.exerciseRow} key={exercise.id} onPress={() => onClick(exercise.id)}>
            <Text style={styles.rowText}>{exercisesList.find(item => item.id === exercise.id).name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ExercisesList;
