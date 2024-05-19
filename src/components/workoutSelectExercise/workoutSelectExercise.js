import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import WorkoutExerciseTile from '../tiles/workoutExerciseTile.js/workoutExerciseTile';
import styles from './workoutSelectExercise.styles';

const WorkoutSelectExercise = ({ handleEndTraining }) => {
  const finishedExercises = useSelector(state => state.training.finishedExercises);
  const notFinishedExercises = useSelector(state => state.training.notFinishedExercises);

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
                <TouchableOpacity onPress={handleEndTraining}>
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
            <TouchableOpacity onPress={handleEndTraining}>
              <Text style={styles.buttonTextPreview}>End training</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default WorkoutSelectExercise;
