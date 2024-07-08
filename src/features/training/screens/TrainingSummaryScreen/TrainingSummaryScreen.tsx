import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch, useFormatTime } from '../../../../utility/hooks';
import styles from './TrainingSummaryScreen.styles';
import WorkoutSummaryListItem from '../../components/SummaryListItem/SummaryListItem';
import { RootState } from '../../../../store/store';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import Layout from '../../../../components/Layout/Layout';
import { RootStackParamList, navigate } from '../../../../utility/navigate';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Exercise } from '../../../../types/exercises';

type WorkoutSummaryScreenRouteProp = RouteProp<RootStackParamList, 'WorkoutSummaryScreen'>;

const WorkoutSummary = () => {
  const route = useRoute<WorkoutSummaryScreenRouteProp>();

  if (!route.params || !route.params.workout) {
    return (
      <Layout>
        <Typography variant="h2">No workout data provided.</Typography>
      </Layout>
    );
  }

  const summary = route.params.workout;

  const handleFinish = async () => {
    navigate('MainScreen');
  };

  return (
    <Layout showHeader={false}>
      <ScrollView style={styles.container}>
        <Typography variant="h1">{summary.planName}</Typography>
        <Typography variant="h2" style={{ marginBottom: 24 }}>
          {summary.name}
        </Typography>
        <Typography variant="h3">Exercises</Typography>
        <View style={styles.listWrapper}>
          {summary.exercises.map((exercise: Exercise) => (
            <WorkoutSummaryListItem exercise={exercise} key={exercise.id} />
          ))}
        </View>
        <Typography variant="h3" style={{ marginVertical: 16 }}>
          Total time: {useFormatTime((summary.duration ? summary.duration : summary.time) / 1000)}
        </Typography>
        <Button onPress={handleFinish}>
          <Typography variant="h3">FINISH</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default WorkoutSummary;
