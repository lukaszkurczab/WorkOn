import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFormatTime } from '../../utils/hooks';
import HistoryDetailsListItem from './historyDetailsListItem/historyDetailsListItem';
import WorkoutCard from '../workoutCard/workoutCard';
import styles from './historyDetails.styles';

const HistoryDetails = ({ dayHistory }) => {
  const [showExercises, setShoweExercises] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {dayHistory.map(day => (
        <View key={day.id}>
          <TouchableOpacity onPress={() => setShoweExercises(!showExercises)}>
            <WorkoutCard
              workout={{
                plan: day.plan,
                day: day.day,
                duration: day.time,
                exercises: day.exercises.length,
              }}
              key={day.id}
            />
          </TouchableOpacity>
          <ScrollView style={[styles.listWrapper, { display: showExercises ? 'flex' : 'none' }]}>
            {day.exercises.map(exercise => (
              <HistoryDetailsListItem exercise={exercise} key={exercise.id} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

export default HistoryDetails;
