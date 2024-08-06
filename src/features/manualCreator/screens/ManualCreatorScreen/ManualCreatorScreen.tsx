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
import { navigate } from '../../../../utility/navigate';
import Modal from '../../../../components/Modal/Modal';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';

const ManualCreatorScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const showNavigation = useSelector((state: RootState) => state.manualCreator.showNavigation);
  const [step, setStep] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleExit = () => {
    setShowModal(false);
    navigate('MainScreen');
  };

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <StepperForm
          currentStep={step}
          setCurrentStep={setStep}
          steps={steps}
          showNavigation={showNavigation}
          onSubmit={handleSave}
          onExit={() => setShowModal(true)}
        />
        <Modal visible={showModal} onClose={() => setShowModal(false)}>
          <View style={styles.modalBody}>
            <Typography variant="h3">Are you sure you want to exit? You will lose data</Typography>
            <View style={styles.modalButtons}>
              <Button style={styles.modalButton} variant="outlined" onPress={() => setShowModal(false)}>
                <Typography variant="h3">No</Typography>
              </Button>
              <Button style={styles.modalButton} onPress={handleExit}>
                <Typography variant="h3">Yes</Typography>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
