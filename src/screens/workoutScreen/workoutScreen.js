import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { END_TRAINING } from '../../store/reducers/trainingReducer';
import { addHistoryItem, progressTraining } from '../../store/actions/userActions';
import WorkoutTimer from '../../components/workoutTimer/workoutTimer';
import WorkoutSelectExercise from '../../components/workoutSelectExercise/workoutSelectExercise';
import WorkoutExercise from '../../components/workoutExercise/workoutExercise';
import WorkoutRest from '../../components/workoutRest/workoutRest';
import styles from './workoutScreen.styles';

const WorkoutMain = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const step = useSelector(state => state.training.trainingStep);
  const userId = useSelector(state => state.user.data.id);
  const userPlans = useSelector(state => state.user.data.plans);
  const startedTraining = useSelector(state => state.training.startedTraining);
  const trainingSummary = useSelector(state => state.training.trainingSummary);
  const trainingStart = useSelector(state => state.training.trainingStart);

  const handleEndTraining = () => {
    const date = new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    dispatch(
      addHistoryItem({
        id: userId,
        historyItem: {
          date: `${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`,
          plan: startedTraining.plan,
          day: startedTraining.day,
          time: Date.now() - trainingStart,
          exercises: trainingSummary.exercises,
        },
      }),
    );
    dispatch(
      progressTraining({
        userId: userId,
        plan: {
          id: startedTraining.id,
          dayIndex: startedTraining.dayIndex,
          plans: userPlans,
          finishedExercises: trainingSummary.exercises,
        },
      }),
    );

    dispatch(END_TRAINING());
    navigation.navigate('WorkoutSummaryScreen');
  };

  switch (step) {
    case 'select':
      return <WorkoutSelectExercise handleEndTraining={handleEndTraining} />;
    case 'exercise':
      return <WorkoutExercise handleEndTraining={handleEndTraining} />;
    case 'rest':
      return <WorkoutRest handleEndTraining={handleEndTraining} />;
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
