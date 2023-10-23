import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './workoutTimer.styles';

const WorkoutTimer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>10:20:12</Text>
    </View>
  );
};

export default WorkoutTimer;