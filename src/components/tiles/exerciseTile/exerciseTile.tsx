import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './exerciseTile.styles';

const ExerciseTile = () => {

  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/atlas_placeholder.jpg')} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Push up</Text>
        <Text style={styles.heading}>Main muscle part:</Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Back</Text>
        </View>
      </View>
    </View>
  )
};

export default ExerciseTile;