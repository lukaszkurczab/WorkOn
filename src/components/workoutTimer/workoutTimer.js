import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import styles from './workoutTimer.styles';

const WorkoutTimer = ({ time }) => {
  const [timeConverted, setTimeConverted] = useState('')

  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const timeToDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    
    setTimeConverted(timeToDisplay)
  },[time])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timeConverted}</Text>
    </View>
  );
};

export default WorkoutTimer;