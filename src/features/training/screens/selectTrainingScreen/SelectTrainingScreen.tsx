import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import Layout from '../../../../components/Layout/Layout';
import styles from './SelectTrainingScreen.styles';
import { Typography } from '../../../../components/Typography/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from '../../../../utility/hooks';
import { SELECT_PLAN, SELECT_TRAINING, START_TRAINING } from '../../store/slice/slice';
import Button from '../../../../components/Button/Button';
import { WorkoutPlan } from '../../../../types/plans';
import { RootState } from '../../../../store/store';
import { ScrollView } from 'react-native-gesture-handler';

const SelectTrainingScreen = () => {
  const dispatch = useDispatch();
  const plans = useSelector((state: RootState) => state.user.plans);
  const selectedPlan = useSelector((state: RootState) => state.training.selectedPlan);
  const selectedTraining = useSelector((state: RootState) => state.training.selectedTraining);

  const selectPlan = (plan: WorkoutPlan) => {
    dispatch(SELECT_PLAN(plan));
    dispatch(SELECT_TRAINING(plan.days[0]));
  };

  const selectTraining = (training: any) => {
    dispatch(SELECT_TRAINING(training));
  };

  const handleTrainingSelect = () => {
    dispatch(START_TRAINING(selectedTraining));
    navigate('TrainingScreen');
  };

  return (
    <Layout>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Typography variant="h2" style={{}}>
              Select plan
            </Typography>
            {plans.map((plan: any) => (
              <TouchableOpacity
                key={plan.id}
                onPress={() => {
                  selectPlan(plan);
                }}
                style={plan.id === selectedPlan.id ? styles.selectedButton : styles.button}
              >
                <Typography
                  variant="h3"
                  style={plan.id === selectedPlan.id ? styles.selectedButtonText : styles.buttonText}
                >
                  {plan.name}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Typography variant="h2" style={{}}>
              Select day
            </Typography>
            {selectedPlan.days.map((day: any) => (
              <TouchableOpacity
                key={day.id}
                style={day.id === selectedTraining.id ? styles.selectedButton : styles.button}
                onPress={() => selectTraining(day)}
              >
                <Typography
                  variant="h3"
                  style={day.id === selectedTraining.id ? styles.selectedButtonText : styles.buttonText}
                >
                  {day.name}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Button onPress={() => handleTrainingSelect()}>
              <Typography variant="h2">Start training</Typography>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default SelectTrainingScreen;
