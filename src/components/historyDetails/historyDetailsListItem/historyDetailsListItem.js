import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './historyDetailsListItem.styles';

const WorkoutSummaryListItem = ({ exercise }) => {
  const [showSeries, setShowSeries] = useState(false);
  const exercisesList = useSelector(state => state.exercises.data);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowSeries(!showSeries)}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{exerciseData.name}</Text>
        </View>
        <View style={{ display: showSeries ? 'flex' : 'none' }}>
          {exercise.series.map((i, index) => (
            <View style={styles.dropdownWrapper} key={index}>
              <Text style={styles.dropdownText}>
                Series {index + 1}: {i.reps} x {i.weight}kg
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutSummaryListItem;
