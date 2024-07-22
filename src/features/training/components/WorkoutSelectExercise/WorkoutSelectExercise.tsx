import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ExerciseTile from '../ExerciseTile/ExerciseTile';
import styles from './WorkoutSelectExercise.styles';
import { RootState } from '../../../../store/store';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import { useDispatch } from '../../../../utility/hooks';
import { NAVIGATE_TO_ADD_EXERCISE } from '../../store/slice/slice';

type WorkoutSelectExerciseProps = {
  handleEndTraining: () => void;
};

const WorkoutSelectExercise = ({ handleEndTraining }: WorkoutSelectExerciseProps) => {
  const dispatch = useDispatch();
  const finishedExercises = useSelector((state: RootState) => state.training.finishedExercises);
  const unfinishedExercises = useSelector((state: RootState) => state.training.unfinishedExercises);
  const sendingTraining = useSelector((state: RootState) => state.training.sendingTraining);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Typography variant="h2" style={styles.title}>
          Select Exercise
        </Typography>
        <View style={styles.tilesWrapper}>
          {unfinishedExercises.map(exercise => (
            <ExerciseTile exercise={exercise} key={exercise.id} />
          ))}
          <Button onPress={() => dispatch(NAVIGATE_TO_ADD_EXERCISE())}>
            <Typography variant="h2"> + Add exercise</Typography>
          </Button>
          {unfinishedExercises.length === 0 && (
            <Button style={{ marginVertical: 16 }} onPress={handleEndTraining} disabled={sendingTraining}>
              <Typography variant="h2">End training</Typography>
            </Button>
          )}
        </View>
      </View>
      <View>
        <Typography variant="h2" style={styles.title}>
          Completed Exercises
        </Typography>
        <View style={styles.tilesWrapper}>
          {finishedExercises.map(exercise => (
            <ExerciseTile exercise={exercise} key={exercise.id} touchable={false} />
          ))}
        </View>
        {unfinishedExercises.length > 0 && (
          <Button style={{ marginVertical: 16 }} onPress={handleEndTraining} disabled={sendingTraining}>
            <Typography variant="h2">End training</Typography>
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

export default WorkoutSelectExercise;
