import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './workoutCard.styles';

const WorkoutCard = ({ workout }) => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.type}>{workout.type}</Text>
        <Text style={styles.details}>{`${workout.exercises} exercises · ${workout.duration}`}</Text>
      </View>
      <Image source={require('../../assets/articles_gym.jpg')} style={styles.image} />
    </View>
  );
};

export default WorkoutCard;
