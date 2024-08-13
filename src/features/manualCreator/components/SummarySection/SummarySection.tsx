import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './SummarySection.styles';
import { useSelector } from '../../../../utility/hooks';
import { RootState } from '../../../../store/store';
import ExerciseSummarySection from '../ExerciseSummarySection/ExerciseSummarySection';

const SummarySection = () => {
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const isWaveProgression = plan.progression === 'Wave progression';

  if (isWaveProgression) {
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
