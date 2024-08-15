import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './PlanSummary.styles';
import ExerciseSummarySection from '../ExerciseSummary/ExerciseSummary';
import { WorkoutPlan } from '../../types/plans';

interface SummarySectionProps {
  plan: WorkoutPlan;
  progressionType: 'Wave progression' | 'Linear progression';
}

const SummarySection = ({ plan, progressionType }: SummarySectionProps) => {
  if (progressionType === 'Wave progression') {
    return (
      <View style={{ width: '100%' }}>
        <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
          {plan.waves.map(wave => (
            <View key={wave.id} style={{ marginBottom: 16 }}>
              <Typography variant="h2">{wave.name}</Typography>
              {wave.days.map(dayId => {
                const day = plan.days.find(d => d.id === dayId);
                return day ? (
                  <View key={day.id}>
                    <Typography variant="h2">{day.name}</Typography>
                    {day.exercises.map(exercise => (
                      <View key={exercise.id} style={{ gap: 8 }}>
                        <ExerciseSummarySection exercise={exercise} />
                      </View>
                    ))}
                  </View>
                ) : null;
              })}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={{ width: '100%' }}>
      <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
        {plan.days.map(day => (
          <View key={day.id} style={{ marginBottom: 16 }}>
            <Typography variant="h2">{day.name}</Typography>
            {day.exercises.map(exercise => (
              <View key={exercise.id} style={{ gap: 8, marginBottom: 16 }}>
                <ExerciseSummarySection exercise={exercise} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SummarySection;
