import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './workoutScreen.styles';
import WorkoutTimer from '../../components/workoutTimer/workoutTimer';
import WorkoutSelectExercise from '../../components/workoutSelectExercise/workoutSelectExercise';
import WorkoutExercise from '../../components/workoutExercise/workoutExercise';
import WorkoutRest from '../../components/workoutRest/workoutRest';

const WorkoutMain = () => {
  const step = useSelector(store => store.training.trainingStep);

  switch (step) {
    case 'select':
      return <WorkoutSelectExercise />;
    case 'exercise':
      return <WorkoutExercise />;
    case 'rest':
      return <WorkoutRest />;
  }
};

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timerWrapper}>
        <Text style={styles.timerText}>Total</Text>
        <WorkoutTimer />
      </View>
      {WorkoutMain()}
    </View>
  );
};

export default WorkoutScreen;
