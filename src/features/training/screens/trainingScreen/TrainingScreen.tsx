import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import WorkoutSelectExercise from '../../components/WorkoutSelectExercise/WorkoutSelectExercise';
import WorkoutRest from '../../components/WorkoutRest/WorkoutRest';
import styles from './TrainingScreen.styles';
import { RootState } from '../../../../store/store';
import Layout from '../../../../components/Layout/Layout';
import WorkoutExercise from '../../components/WorkoutExercise/WorkoutExercise';
import { navigate } from '../../../../utility/navigate';
import { END_TRAINING } from '../../store/slice/slice';

const selectStep = (step: string) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const training = useSelector((state: RootState) => state.training.selectedTraining);
  const startTime = useSelector((state: RootState) => state.training.startTime);
  const trainingSummary = useSelector((state: RootState) => state.training.trainingSummary);

  const handleEndTraining = () => {
    const date = new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    // dispatch(
    //   addHistoryItem({
    //     id: userId,
    //     historyItem: {
    //       date: `${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`,
    //       plan: startedTraining.plan,
    //       day: startedTraining.day,
    //       time: Date.now() - trainingStart,
    //       exercises: trainingSummary.exercises,
    //     },
    //   })
    // );
    // dispatch(
    //   progressTraining({
    //     userId: userId,
    //     plan: {
    //       id: startedTraining.id,
    //       dayIndex: startedTraining.dayIndex,
    //       plans: userPlans,
    //       finishedExercises: trainingSummary.exercises,
    //     },
    //   })
    // );
    dispatch(END_TRAINING());
    navigate('WorkoutSummary');
  };

  switch (step) {
    case 'select':
      return <WorkoutSelectExercise handleEndTraining={handleEndTraining} />;
    case 'exercise':
      return <WorkoutExercise handleEndTraining={handleEndTraining} />;
    case 'rest':
      return <WorkoutRest handleEndTraining={handleEndTraining} />;
  }
};

const TrainingScreen = () => {
  const step = useSelector((state: RootState) => state.training.step);

  return (
    <Layout showHeader={false} showNavigation={false}>
      <View style={styles.container}>{selectStep(step)}</View>
    </Layout>
  );
};

export default TrainingScreen;
