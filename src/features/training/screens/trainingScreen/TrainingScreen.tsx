import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import WorkoutSelectExercise from '../../components/WorkoutSelectExercise/WorkoutSelectExercise';
import WorkoutRest from '../../components/WorkoutRest/WorkoutRest';
import styles from './TrainingScreen.styles';
import { RootState } from '../../../../store/store';
import Layout from '../../../../components/Layout/Layout';
import WorkoutExercise from '../../components/WorkoutExercise/WorkoutExercise';
import { navigate } from '../../../../utility/navigate';
import { END_TRAINING } from '../../store/slice/slice';
import { addHistoryItem } from '../../store/actions/actions';
import { useDispatch } from '../../../../utility/hooks';

const selectStep = (step: string) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const summary = useSelector((state: RootState) => state.training.trainingSummary);
  const trainingStart = useSelector((state: RootState) => state.training.startTime);

  const handleEndTraining = async () => {
    await dispatch(
      addHistoryItem({
        userId: user.id,
        historyItem: {
          id: null,
          date: new Date(),
          plan: summary.planName,
          day: summary.name,
          time: Date.now() - trainingStart,
          public: false,
          exercises: summary.exercises,
        },
      })
    );
    dispatch(END_TRAINING());
    navigate('WorkoutSummary');
  };

  switch (step) {
    case 'select':
      return <WorkoutSelectExercise handleEndTraining={handleEndTraining} />;
    case 'exercise':
      return <WorkoutExercise />;
    case 'rest':
      return <WorkoutRest />;
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
