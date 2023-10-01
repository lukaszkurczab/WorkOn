import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './exerciseTile.styles';
import { Exercise } from '../../../types/exercise';

const ExerciseTile = (exercise: Exercise) => {

  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/atlas_placeholder.jpg')} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.heading}>Main muscle part:</Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Back</Text>
        </View>
      </View>
    </View>
  )
};

export default ExerciseTile;