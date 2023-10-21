import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './exerciseTile.styles';
import { Exercise } from '../../../types/exercise';

interface Props {
  exercise: Exercise
}

const ExerciseTile = ({exercise}: Props) => {

  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/atlas_placeholder.jpg')} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.heading}>Main muscle part:</Text>
        {exercise.muscleMain.map((muscleMain: string)=>(
        <View style={styles.chip} key={muscleMain}>
          <Text style={styles.chipText}>{muscleMain}</Text>
        </View>
        ))}
      </View>
    </View>
  )
};

export default ExerciseTile;