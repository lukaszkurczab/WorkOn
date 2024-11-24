import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import WorkoutSelectExercise from '../../components/WorkoutSelectExercise/WorkoutSelectExercise';
import WorkoutRest from '../../components/WorkoutRest/WorkoutRest';
import styles from './TrainingScreen.styles';
import { RootState } from '../../../../store/store';
import Layout from '../../../../components/Layout/Layout';
import WorkoutExercise from '../../components/WorkoutExercise/WorkoutExercise';
import { addHistoryItem, updateUserPlan } from '../../store/actions/actions';
import { updatePlanExercise, useDispatch } from '../../../../utility/hooks';
import { navigate } from '../../../../utility/navigate';
import WorkoutAddNewExercise from '../../components/WorkoutAddNewExercise/WorkoutAddNewExercise';

const selectStep = (step: string) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const summary = useSelector((state: RootState) => state.training.trainingSummary);
  const trainingStart = useSelector((state: RootState) => state.training.startTime);
  const selectedTraining = useSelector((state: RootState) => state.training.selectedTraining);
  const selectedPlan = useSelector((state: RootState) => state.training.selectedPlan);

  const handleEndTraining = async () => {
    const selectedTrainingIndex = selectedPlan.days.findIndex(day => day.id === selectedTraining.id);

    await dispatch(
      addHistoryItem({
        userId: user.id,
        historyItem: {
          id: summary.id,
          date: new Date(),
          plan: summary.plan,
          day: summary.day,
          time: Date.now() - trainingStart,
          publicType: user.settings.defaultHistoryPublicType,
          exercises: summary.exercises,
        },
      })
    );

    const updatedPlan = JSON.parse(JSON.stringify(selectedPlan));
    const updatedExercises = selectedTraining.exercises.map(planExercise => {
      const exerciseFromSummary = summary.exercises.find(exercise => exercise.id === planExercise.id);
      if (exerciseFromSummary) {
        return updatePlanExercise(exerciseFromSummary, planExercise);
      } else {
        return planExercise;
      }
    });

    updatedPlan.days[selectedTrainingIndex] = {
      ...updatedPlan.days[selectedTrainingIndex],
      exercises: [...updatedExercises],
    };

    await dispatch(updateUserPlan({ userId: user.id, plan: updatedPlan }));
    navigate('WorkoutSummaryScreen', { workout: { ...summary, duration: Date.now() - trainingStart } });
  };

  switch (step) {
    case 'select':
      return <WorkoutSelectExercise handleEndTraining={handleEndTraining} />;
    case 'exercise':
      return <WorkoutExercise />;
    case 'add':
      return <WorkoutAddNewExercise />;
    case 'rest':
      return <WorkoutRest />;
  }
};

const TrainingScreen = () => {
  const step = useSelector((state: RootState) => state.training.step);
  const selectedExercise = useSelector((state: RootState) => state.training.selectedExercise);
  const seriesIndex = useSelector((state: RootState) => state.training.seriesIndex);

  return (
    <Layout showHeader={false} showNavigation={false}>
      <View style={styles.container}>{selectStep(step)}</View>
    </Layout>
  );
};

export default TrainingScreen;
