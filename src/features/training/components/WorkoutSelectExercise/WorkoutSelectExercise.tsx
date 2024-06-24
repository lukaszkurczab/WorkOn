import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
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
            <View>
              <Typography variant="h3" style={styles.text}>
                There is no more exercise
              </Typography>
              <Button variant="outlined" style={{ marginVertical: 16 }} onPress={handleEndTraining}>
                <Typography variant="h2">Go to summary</Typography>
              </Button>
            </View>
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
          <Button variant="text" style={{ marginTop: 16 }} onPress={handleEndTraining}>
            <Typography variant="h2" style={{ textDecorationLine: 'underline' }}>
              End training
            </Typography>
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

export default WorkoutSelectExercise;
