import { View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { SET_SELECTED_EXERCISE } from '../../store/slice/exercisesSlice';
import { END_REST } from '../../store/reducers/trainingReducer';
import styles from './workoutRest.styles';

const CircularProgressBar = ({ size = 200, strokeWidth = 15, seconds }) => {
  const progress = (seconds / 60) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.stoperWrapper}>
      <Svg width={size} height={size}>
        <G rotation='-90' origin={`${size / 2}, ${size / 2}`}>
          <Circle cx='50%' cy='50%' stroke='#e6e7e8' strokeWidth={strokeWidth} r={radius} fill='none' />
          <Circle
            cx='50%'
            cy='50%'
            stroke='#3498db'
            strokeWidth={strokeWidth}
            r={radius}
            fill='none'
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
          />
        </G>
      </Svg>
    </View>
  );
};

const WorkoutRest = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const exercise = useSelector(state => state.training.ongoingExercise.exercise);
  const restStart = useSelector(state => state.training.restStart);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const restTime = Math.floor((currentTime - new Date(restStart)) / 1000);
      setSeconds(restTime % 60);
      setMinutes(Math.floor(restTime / 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePreview = () => {
    dispatch(SET_SELECTED_EXERCISE(exercise.id));
    navigation.navigate('ExerciseScreen');
  };

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
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={handleFinish}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handlePreview}>
          <Text style={styles.buttonTextPreview}>Preview exercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutRest;
