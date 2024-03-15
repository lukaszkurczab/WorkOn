import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './workoutSummaryListItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WorkoutSummaryListItem = ({ exercise }) => {
  const exercisesList = useSelector(state => state.exercises.data);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);
  const [showSeries, setShowSeries] = useState(false);

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
              {i.success ? (
                <Icon name='check-circle' size={20} style={styles.iconSuccess} />
              ) : (
                <Icon name='cancel' size={20} style={styles.iconFail} />
              )}
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutSummaryListItem;
