import { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SET_SELECTED_EXERCISE } from '../../store/reducers/exercisesReducer';
import { FINISH_SERIE, END_TRAINING } from '../../store/reducers/trainingReducer';
import { addHistoryItem, progressTraining } from '../../store/actions/userActions';
import { ExerciseImageMap } from '../../assets/exercises/_exerciseImageMap';
import WorkoutSeriesModal from '../workoutSeriesModal/workoutSeriesModal';
import styles from './workoutExercise.styles';

const WorkoutExercise = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const exercise = useSelector(state => state.training.ongoingExercise.exercise);
  const exerciseSerieIndex = useSelector(state => state.training.ongoingExercise.serieIndex);
  const ongoingPlanData = useSelector(state => state.training.ongoingPlanData);
  const userId = useSelector(state => state.user.data.id);
  const exercisesList = useSelector(state => state.exercises.exercises);
  const [showModal, setShowModal] = useState(false);
  const reps = exercise.series[exerciseSerieIndex].reps;
  const trainingStart = useSelector(state => state.training.trainingStart);
  const weight = exercise.series[exerciseSerieIndex].weight;
  const userPlans = useSelector(state => state.user.data.plans);
  const trainingSummary = useSelector(state => state.training.trainingSummary);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);

  const handleFinish = () => {
    setShowModal(true);
  };

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
          name: ongoingPlanData.name,
          time: Date.now() - trainingStart,
          exercises: trainingSummary,
        },
      }),
    );
    dispatch(
      progressTraining({
        userId: userId,
        plan: {
          id: ongoingPlanData.id,
          dayIndex: ongoingPlanData.dayIndex,
          plans: userPlans,
          finishedExercises: trainingSummary,
        },
      }),
    );

    dispatch(END_TRAINING());
    navigation.navigate('WorkoutSummaryScreen');
  };

  const handleSeriesConfirm = (reps, weight) => {
    dispatch(FINISH_SERIE({ reps, weight }));
    setShowModal(false);
  };

  const handleHelp = () => {
    dispatch(SET_SELECTED_EXERCISE(exercise.id));
    navigation.navigate('ExerciseScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          {exerciseData.name}
          <TouchableOpacity onPress={handleHelp}>
            <Icon name='question-circle' style={styles.buttonIcon} />
          </TouchableOpacity>
        </Text>

        <Text style={styles.reps}>
          {reps} x {weight}kg
        </Text>
        <Image source={ExerciseImageMap[exerciseData.image]} style={styles.image} />
        <View style={styles.descWrapper}>
          <Text style={styles.descTitle}>Short description</Text>
          <Text style={styles.descText}>{exerciseData.focusPoints}</Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.endButtonWrapper}>
            <TouchableOpacity onPress={handleEndTraining}>
              <Text style={styles.endButtonText}>End training</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={handleFinish}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showModal && <WorkoutSeriesModal onConfirm={handleSeriesConfirm} initReps={reps} initWeight={weight} />}
    </ScrollView>
  );
};

export default WorkoutExercise;
