import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!route.params || !route.params.workout) {
        setError(true);
      }
    }, 10000); // 10 seconds

    if (route.params && route.params.workout) {
      setLoading(false);
    }

    return () => clearTimeout(timer);
  }, [route.params]);
  if (loading) {
    return (
      <Layout showHeader={false}>
        <ActivityIndicator color="#06f" size="large" />
        <Typography variant="h2">Loading workout data...</Typography>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout showHeader={false}>
        <Typography variant="h2">No workout data provided.</Typography>
      </Layout>
    );
  }

  const summary = route.params!.workout;
  const previousScreen = route.params!.previousScreen;

  const handleFinish = async () => {
    navigate(previousScreen ? previousScreen : 'MainScreen');
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
          <Typography variant="h3">{previousScreen ? 'BACK' : 'FINISH'}</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default WorkoutSummary;
