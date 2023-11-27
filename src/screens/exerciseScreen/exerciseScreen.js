import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './exerciseScreen.styles';
import { useSelector } from "react-redux";

const ExerciseScreen = () => {
    const exercise = useSelector((store) => store.exercises.selectedExercise)

    return(
        <View style={styles.container}>
            <Text>{exercise.name}</Text>
            <Text>Start position:</Text>
            <Text>{exercise.startPosition}</Text>
            <Text>Process:</Text>
            <Text>{exercise.process}</Text>
            <Text>Main muscles group:</Text>
            <Text>{JSON.stringify(exercise.muscleMain)}</Text>
            <Text>Assisting muscles:</Text>
            <Text>{JSON.stringify(exercise.muscleAdditional)}</Text>
            <TouchableOpacity>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
  )
};

export default ExerciseScreen;