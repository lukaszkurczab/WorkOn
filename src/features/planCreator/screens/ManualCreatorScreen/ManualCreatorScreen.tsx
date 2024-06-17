import React, { useState } from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import PlanGeneral from '../../components/PlanGeneral/PlanGeneral';
import styles from './ManualCreatorScreen.styles';
import Modal from '../../../../components/Modal/Modal';
import { navigate } from '../../../../utility/navigate';
import { useSelector, useDispatch } from 'react-redux';
import { VALIDATE_PLAN } from '../../store/slice/slice';
import { RootState } from '../../../../store/store';
import PlanCarousel from '../../components/PlanCarousel/PlanCarousel';

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <PlanGeneral />;
    case 1:
      return <PlanCarousel />;
    default:
      return <PlanGeneral />;
  }
};

const ManualCreatorScreen = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const error = useSelector((state: RootState) => state.planCreator.error);

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setModalVisible(true);
      setModalText('Plan is not saved, do you want to do it now? ');
    }
  };

  const handleNext = () => {
    dispatch(VALIDATE_PLAN());
    if (error === '') setStep(step + 1);
  };

  return (
    <Layout showNavigation={false}>
      <View style={styles.container}>
        {getStepContent(step)}
        <View style={styles.buttonsWrapper}>
          <Button variant="text" onPress={handleBack} style={styles.button}>
            <Typography variant="h2">Back</Typography>
          </Button>
          <Button disabled={step === 1} onPress={handleNext} style={styles.button}>
            <Typography variant="h2">Next</Typography>
          </Button>
        </View>
        <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
          <Typography variant="h3" style={styles.modal_text}>
            {modalText}
          </Typography>
          <View style={styles.modal_buttonsWrapper}>
            <Button variant="outlined" onPress={() => setModalVisible(false)} style={styles.modal_button}>
              <Typography variant="h3">No</Typography>
            </Button>
            <Button
              onPress={() => {
                setModalVisible(false);
                navigate('CarouselScreen');
              }}
              style={styles.modal_button}
            >
              <Typography variant="h3">Yes</Typography>
            </Button>
          </View>
        </Modal>
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
