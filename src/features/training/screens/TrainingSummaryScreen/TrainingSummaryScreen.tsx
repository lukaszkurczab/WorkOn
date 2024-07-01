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
import { navigate } from '../../../../utility/navigate';

const WorkoutSummary = () => {
  const summary = useSelector((state: RootState) => state.training.trainingSummary);

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
          {summary.exercises.map(exercise => (
            <WorkoutSummaryListItem exercise={exercise} key={exercise.id} />
          ))}
        </View>
        <Typography variant="h3" style={{ marginVertical: 16 }}>
          Total time: {useFormatTime(parseInt((summary.duration / 1000).toFixed()))}
        </Typography>
        <Button onPress={handleFinish}>
          <Typography variant="h3">FINISH</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default WorkoutSummary;
