import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import RepeatRow from './repeatRow/repeatRow';
import styles from './workoutMain.styles';

const WorkoutMain = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timers}>
        <View>
          <Text style={styles.timersText}>Total</Text>
          <WorkoutTimer/>
        </View>
        <View>
          <Text style={styles.timersText}>Rest</Text>
          <WorkoutTimer/>
        </View>
      </View>
      <Text style={styles.title}>Bench Press</Text>
      <View style={styles.seriesWrapper}>
        <RepeatRow reps={10} weight={40}/>
        <RepeatRow reps={10} weight={40}/>
        <RepeatRow reps={10} weight={40}/>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.descTitle}>Short description</Text>
        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime provident eius ea eum tempora impedit voluptates, sunt qui recusandae doloremque modi? Voluptates repellat totam necessitatibus dolore vitae error iste doloremque!</Text>
      </View>
    </View>
  );
};

export default WorkoutMain;