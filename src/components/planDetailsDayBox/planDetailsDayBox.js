import { View, Text, ScrollView } from 'react-native';
import PlanDetailsExercise from '../planDetailsExercise/planDetailsExercise';
import styles from './planDetailsDayBox.styles';

const PlanDetailsDayBox = ({ day }) => {
  return (
    <ScrollView key={day.name}>
      <Text style={styles.heading}>{day.name}</Text>
      <View style={styles.exercisesWrapper}>
        {day.exercises.map(exercise => (
          <PlanDetailsExercise exercise={exercise} key={exercise.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PlanDetailsDayBox;
