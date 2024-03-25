import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { END_TRAINING } from '../../store/reducers/trainingReducer';
import WorkoutExerciseTile from '../tiles/workoutExerciseTile.js/workoutExerciseTile';
import styles from './workoutSelectExercise.styles';

const WorkoutSelectExercise = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const finishedExercises = useSelector(store => store.training.finishedExercises);
  const notFinishedExercises = useSelector(store => store.training.notFinishedExercises);

  const handleFinish = () => {
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
      </View>
    </ScrollView>
  );
};

export default WorkoutSelectExercise;
