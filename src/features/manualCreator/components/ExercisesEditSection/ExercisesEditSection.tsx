import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './ExercisesEditSection.styles';
import { Day } from '../../../../types/plans';
import ExerciseEditSection from '../ExerciseEditSection/ExerciseEditSection';

type ExercisesEditSectionProps = {
  day: Day;
};

const ExercisesEditSection = ({ day }: ExercisesEditSectionProps) => {
  return (
    <View style={{ width: '100%' }}>
      <Typography variant="h2">{day.name} - Edit exercises</Typography>
      <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
        {day.exercises.map(exercise => (
          <View key={exercise.id} style={{ gap: 8, marginBottom: 16 }}>
            <View style={styles.listItem}>
              <Typography variant="h3" style={styles.listText}>
                {exercise.name}
              </Typography>
            </View>
            <ExerciseEditSection dayId={day.id} exercise={exercise} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExercisesEditSection;
