import React, { useState } from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './CarouselItem.styles';
import Modal from '../../../../components/Modal/Modal';
import SelectedExercisesSection from '../../../manualCreator/components/SelectedExercisesSection/SelectedExercisesSection';
import ExerciseListSection from '../ExerciseListSection/ExerciseListSection';
import ExerciseEditSection from '../ExerciseEditSection/ExerciseEditSection';
import { Day } from '../../../../types/plans';

type PlanCarouselItemProps = {
  day: Day;
};

const PlanCarouselItem = ({ day }: PlanCarouselItemProps) => {
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState({ display: false, text: '' });
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);

  const handleSetStep = (newStep: number) => {
    setStep(newStep);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <SelectedExercisesSection
            handleSetStep={handleSetStep}
            handleSelectExerciseToEdit={setSelectedExerciseIndex}
            day={day}
            exercises={day.exercises}
          />
        );
      case 1:
        return <ExerciseListSection day={day} handleSetStep={handleSetStep} />;
      case 2:
        return (
          <ExerciseEditSection
            dayId={day.id}
            handleSetStep={handleSetStep}
            exercise={day.exercises[selectedExerciseIndex]}
            selectedExerciseIndex={selectedExerciseIndex}
            handleSetSelectedExerciseIndex={setSelectedExerciseIndex}
            lastExerciseIndex={day.exercises.length - 1}
          />
        );
      default:
        return <Typography variant="h2">Ups</Typography>;
    }
  };

  return (
    <View style={styles.container}>
      {getStepContent(step)}
      <Modal visible={modal.display} onClose={() => setModal({ display: false, text: '' })}>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          {modal.text}
        </Typography>
      </Modal>
    </View>
  );
};

export default PlanCarouselItem;
