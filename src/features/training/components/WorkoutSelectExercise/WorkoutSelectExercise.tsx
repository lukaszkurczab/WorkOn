import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ExerciseTile from '../ExerciseTile/ExerciseTile';
import styles from './WorkoutSelectExercise.styles';
import { RootState } from '../../../../store/store';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';

type WorkoutSelectExerciseProps = {
  handleEndTraining: () => void;
};

const WorkoutSelectExercise = ({ handleEndTraining }: WorkoutSelectExerciseProps) => {
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
