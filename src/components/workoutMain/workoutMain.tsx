import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import styles from './workoutMain.styles';

const WorkoutMain = () => {
  return (
    <View style={styles.container}>
      <WorkoutTimer/>
      <Image source={require('../../assets/exercise_placeholder.jpg')} style={styles.image}/>
      <Text style={styles.title}>Bench Press</Text>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity>
          <Icon name='cancel'  size={70} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.reps}>3 x 50 kg</Text>
        <TouchableOpacity>
          <Icon name='check-circle' size={70} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutMain;