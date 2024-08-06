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
import ExercisesEditSection from '../../components/ExercisesEditSection/ExercisesEditSection';
import SummarySection from '../../components/SummarySection/SummarySection';

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
    ...plan.days.flatMap((day, index) => [
      <SelectedExercisesSection key={`selected-${index}`} day={day} />,
      <ExercisesEditSection key={`edit-${index}`} day={day} />,
    ]),
    <SummarySection key="summary" />,
  ];

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <StepperForm
          currentStep={step}
          setCurrentStep={setStep}
          steps={steps}
          showNavigation={showNavigation}
          onSubmit={handleSave}
        />
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
