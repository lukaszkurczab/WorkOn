import React, { useState } from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './ManualCreatorScreen.styles';
import { useSelector } from 'react-redux';
import { createPlan } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import Carousel from '../../components/Carousel/Carousel';
import { useDispatch } from '../../../../utility/hooks';
import StepperForm from '../../../../components/StepperForm/StepperForm';
import SelectedExercisesSection from '../../components/SelectedExercisesSection/SelectedExercisesSection';

const ManualCreatorScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const [step, setStep] = useState<number>(0);

  const handleSave = () => {
    dispatch(createPlan({ userId, newPlan: plan }));
  };

  const steps = [<SelectedExercisesSection days={plan.days} />, <SelectedExercisesSection days={plan.days} />];

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <StepperForm currentStep={step} setCurrentStep={setStep} steps={steps} />
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
