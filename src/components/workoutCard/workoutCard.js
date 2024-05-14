import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFormatTime } from '../../utils/hooks';
import styles from './workoutCard.styles';

const WorkoutCard = ({ workout }) => {
  const { type, exercises, duration } = workout;
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.details}>{`${exercises} exercises · ${useFormatTime(duration / 1000)}`}</Text>
      </View>
      <Image source={require('../../assets/articles_gym.jpg')} style={styles.image} />
    </View>
  );
};

export default WorkoutCard;
