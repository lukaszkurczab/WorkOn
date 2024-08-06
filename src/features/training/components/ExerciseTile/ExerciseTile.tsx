import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SELECT_EXERCISE } from '../../store/slice/slice';
import { Exercise } from '../../../../types/exercises';
import { useGetExerciseData } from '../../../../utility/hooks';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './ExerciseTile.styles';
import ExerciseImage from '../../../../components/ExerciseImage/ExerciseImage';

type ExerciseTileProps = {
  exercise: Exercise;
  touchable?: boolean;
};

const ExerciseTile: React.FC<ExerciseTileProps> = ({ exercise, touchable = true }) => {
  const dispatch = useDispatch();
  const exerciseData = useGetExerciseData(exercise.id);

  const handlePress = () => {
    if (touchable) {
      dispatch(SELECT_EXERCISE({ ...exercise, ...exerciseData }));
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!touchable}>
      <View style={styles.container}>
        <ExerciseImage imageName={exerciseData.image} style={{ width: 120, height: 120 }} />
        <View style={styles.textWrapper}>
          <Typography variant="h3" style={styles.name}>
            {exerciseData.name}
          </Typography>
          <Typography variant="h3" style={styles.series}>
            {exercise.series.length} series
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseTile;
