import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import RepeatRow from '../repeatRow/repeatRow';
import styles from './exerciseView.styles';
import { useGetExercise } from '../../../utils/hooks';

const ExerciseView = ({ clearRestTime, exercise }) => {
  const exerciseData = useGetExercise(exercise.id);
  const repeatRows = []

  const handleSuccess = ()=>{
    clearRestTime(0)
  }

  const handleFail = ()=>{
    clearRestTime(0)
  }

  for (let i = 0; i < exercise.series; i++) {
    repeatRows.push(
      <RepeatRow reps={exercise.reps} weight={exercise.weight} onSuccess={()=>handleSuccess} onFail={()=>handleFail} key={i}/>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleWrapper}> 
        <Text style={styles.title}>{exerciseData.name}</Text>
      </View>
      <View style={styles.seriesWrapper}>
        {repeatRows}
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.descTitle}>Short description</Text>
        <Text style={styles.descText}>{exerciseData.focusPoints}</Text>
      </View>
    </ScrollView>
  );
};

export default ExerciseView;