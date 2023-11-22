import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import styles from './workoutTimer.styles';
import { useFormatTime } from '../../utils/hooks';

const WorkoutTimer = ({ time }) => {
  const [timeConverted, setTimeConverted] = useState('')

  useEffect(() => {
    setTimeConverted(useFormatTime(time))
  },[time])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timeConverted}</Text>
    </View>
  );
};

export default WorkoutTimer;