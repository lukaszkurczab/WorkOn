import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './workoutTimer.styles';
import { useFormatTime } from '../../utility/hooks';

const WorkoutTimer = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [timeConverted, setTimeConverted] = useState('');
  const trainingStart = useSelector(state => state.training.trainingStart);

  useEffect(() => {
    const totalInterval = setInterval(() => {
      setTotalTime(Date.now() - trainingStart);
    }, 1000);

    return () => clearInterval(totalInterval);
  }, []);

  useEffect(() => {
    setTimeConverted(useFormatTime((totalTime / 1000).toFixed()));
  }, [totalTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timeConverted}</Text>
    </View>
  );
};

export default WorkoutTimer;
