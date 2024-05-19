import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import HistoryDetailsListItem from '../../historyDetails/historyDetailsListItem/historyDetailsListItem';
import WorkoutCard from '../../workoutCard/workoutCard';
import styles from './lastTrainingListItem.styles';

const LastTrainingListItem = ({ item }) => {
  const [showExercises, setShoweExercises] = useState(false);

  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.headingWrapper}>
        <TouchableOpacity onPress={() => setShoweExercises(!showExercises)}>
          <WorkoutCard
            workout={{
              plan: item.plan,
              day: item.day,
              duration: item.time,
              exercises: item.exercises.length,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.listWrapper, { display: showExercises ? 'flex' : 'none' }]} nestedScrollEnabled={true}>
        {item.exercises.map(exercise => (
          <HistoryDetailsListItem exercise={exercise} key={exercise.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastTrainingListItem;
