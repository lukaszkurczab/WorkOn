import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { END_TRAINING } from '../../store/reducers/trainingReducer';
import { addHistoryItem, progressTraining } from '../../store/slice/userSlice';
import WorkoutExerciseTile from '../tiles/workoutExerciseTile.js/workoutExerciseTile';
import styles from './workoutSelectExercise.styles';

const WorkoutSelectExercise = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const finishedExercises = useSelector(store => store.training.finishedExercises);
  const notFinishedExercises = useSelector(store => store.training.notFinishedExercises);
  const userId = useSelector(store => store.user.data.id);
  const userPlans = useSelector(store => store.user.data.plans);
  const ongoingPlanData = useSelector(store => store.training.ongoingPlanData);
  const trainingSummary = useSelector(store => store.training.trainingSummary);
  const trainingStart = useSelector(state => state.training.trainingStart);

  const handleFinish = () => {
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

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Select Exercise</Text>
        <View style={styles.tilesWrapper}>
          {notFinishedExercises.map(exercise => (
            <WorkoutExerciseTile exercise={exercise} key={exercise.id} />
          ))}
          {notFinishedExercises.length === 0 && (
            <View>
              <Text style={styles.text}>There is no more exercise</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={handleFinish}>
                  <Text style={styles.buttonText}>Go to summary</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
      <View>
        <Text style={styles.title}>Completed Exercises</Text>
        <View style={styles.tilesWrapper}>
          {finishedExercises.map(exercise => (
            <WorkoutExerciseTile exercise={exercise} key={exercise.id} touchable={false} />
          ))}
        </View>
        {notFinishedExercises.length > 0 && (
          <View>
            <TouchableOpacity onPress={handleFinish}>
              <Text style={styles.buttonTextPreview}>End training</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default WorkoutSelectExercise;
