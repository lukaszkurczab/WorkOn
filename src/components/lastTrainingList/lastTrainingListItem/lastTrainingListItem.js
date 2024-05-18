import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import HistoryDetailsListItem from '../../historyDetails/historyDetailsListItem/historyDetailsListItem';
import WorkoutCard from '../../workoutCard/workoutCard';
import styles from './lastTrainingListItem.styles';

const LastTrainingListItem = ({ day }) => {
  const [showExercises, setShoweExercises] = useState(false);

  console.log(day);

  return (
    <View style={styles.container} key={day.id}>
      <View style={styles.headingWrapper}>
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
      </View>
      <ScrollView style={[styles.listWrapper, { display: showExercises ? 'flex' : 'none' }]} nestedScrollEnabled={true}>
        {day.exercises.map(exercise => (
          <HistoryDetailsListItem exercise={exercise} key={exercise.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastTrainingListItem;
