import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFormatTime } from '../../../utils/hooks';
import HistoryDetailsListItem from '../../historyDetails/historyDetailsListItem/historyDetailsListItem';
import styles from './lastTrainingListItem.styles';

const LastTrainingListItem = ({ day }) => {
  const [showExercises, setShoweExercises] = useState(false);

  return (
    <View style={styles.container} key={day.id}>
      <View style={styles.headingWrapper}>
        <TouchableOpacity onPress={() => setShoweExercises(!showExercises)}>
          <View>
            <Text style={styles.name}>{day.name}</Text>
            <Text style={styles.date}>{day.date}</Text>
            <Text style={styles.text}>Total time: {useFormatTime(day.time / 1000)}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.listWrapper, { display: showExercises ? 'flex' : 'none' }]}>
        {day.exercises.map(exercise => (
          <HistoryDetailsListItem exercise={exercise} key={exercise.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastTrainingListItem;
