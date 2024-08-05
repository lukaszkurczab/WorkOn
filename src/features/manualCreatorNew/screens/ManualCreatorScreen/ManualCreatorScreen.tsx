import React, { useState } from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import styles from './ManualCreatorScreen.styles';
import { useSelector } from 'react-redux';
import { createPlan } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import { useDispatch } from '../../../../utility/hooks';
import StepperForm from '../../../../components/StepperForm/StepperForm';
import SelectedExercisesSection from '../../components/SelectedExercisesSection/SelectedExercisesSection';

const ManualCreatorScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const showNavigation = useSelector((state: RootState) => state.manualCreator.showNavigation);
  const [step, setStep] = useState<number>(0);

  const handleSave = () => {
    dispatch(createPlan({ userId, newPlan: plan }));
  };

  const steps = [
    ...plan.days.map((day, index) => <SelectedExercisesSection day={day} key={index} />),
    <SelectedExercisesSection day={plan.days[0]} />,
  ];

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <StepperForm currentStep={step} setCurrentStep={setStep} steps={steps} showNavigation={showNavigation} />
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
