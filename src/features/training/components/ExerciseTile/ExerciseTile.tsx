import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ExerciseTile.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SELECT_EXERCISE } from '../../store/slice/slice';
import { Exercise } from '../../../../types/exercises';
import { useDispatch, useGetExerciseData } from '../../../../utility/hooks';
import { Typography } from '../../../../components/Typography/Typography';

type ExerciseTileProps = {
  exercise: Exercise;
  touchable?: boolean;
};

const ExerciseTile = ({ exercise, touchable = true }: ExerciseTileProps) => {
  const dispatch = useDispatch();
  const exerciseData = useGetExerciseData(exercise.id);

  const handlePress = () => {
    if (touchable) dispatch(SELECT_EXERCISE({ ...exercise, ...exerciseData }));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={require('../../../../assets/exercises/dips.jpg')} style={styles.image} />
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
