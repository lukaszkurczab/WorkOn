import React, { View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { useDispatch } from '../../../../utility/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import styles from './WorkoutRest.styles';
import { RootState } from '../../../../store/store';
import { END_REST } from '../../store/slice/slice';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

const CircularProgressBar = ({ size = 200, strokeWidth = 15, seconds }: any) => {
  const progress = (seconds / 60) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.stoperWrapper}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle cx="50%" cy="50%" stroke="#e6e7e8" strokeWidth={strokeWidth} r={radius} fill="none" />
          <Circle
            cx="50%"
            cy="50%"
            stroke="#3498db"
            strokeWidth={strokeWidth}
            r={radius}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

const WorkoutRest = ({ handleEndTraining }: any) => {
  const dispatch = useDispatch();
  const exercise = useSelector((state: RootState) => state.training.selectedExercise);
  const restStart = useSelector((state: RootState) => state.training.restStart);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Number(new Date());
      const restTime = Math.floor((currentTime - Number(new Date(restStart))) / 1000);
      setSeconds(restTime % 60);
      setMinutes(Math.floor(restTime / 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePreview = () => {};

  const handleFinish = () => {
    dispatch(END_REST());
  };

  return (
    <View style={styles.container}>
      <View style={styles.stoper}>
        <Text style={styles.stoperText}>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </Text>
        <CircularProgressBar seconds={seconds} />
      </View>
      <Button style={[styles.button, { marginBottom: 8 }]} onPress={handleFinish}>
        <Typography variant="h2">Finish</Typography>
      </Button>
      <Button style={styles.button} variant="text" onPress={() => {}}>
        <Typography variant="h2" style={{ textDecorationLine: 'underline' }}>
          Preview exercise
        </Typography>
      </Button>
      <Button style={styles.button} variant="text" onPress={() => {}}>
        <Typography variant="h2" style={{ textDecorationLine: 'underline' }}>
          End Training
        </Typography>
      </Button>
    </View>
  );
};

export default WorkoutRest;
