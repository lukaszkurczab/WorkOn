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
  handleSetIndex: (newIndex: 'prev' | 'next') => void;
};

const PlanCarouselItem = ({ day, handleSetIndex }: PlanCarouselItemProps) => {
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState({ display: false, text: '' });
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);

  const handleSetStep = (newStep: number) => {
    setStep(newStep);
  };

  const handleSelectExerciseIndex = (direction: 'prev' | 'next') => {
    const newSelectedIndex = direction === 'prev' ? selectedExerciseIndex - 1 : selectedExerciseIndex + 1;
    if (newSelectedIndex >= 0 && newSelectedIndex < day.exercises.length) {
      setSelectedExerciseIndex(newSelectedIndex);
    }
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
            handleSetIndex={handleSetIndex}
          />
        );
      case 1:
        return <ExerciseListSection day={day} handleSetStep={handleSetStep} handleSetIndex={handleSetIndex} />;
      case 2:
        return (
          <ExerciseEditSection
            dayId={day.id}
            handleSetStep={handleSetStep}
            exercise={day.exercises[selectedExerciseIndex]}
            selectedExerciseIndex={selectedExerciseIndex}
            handleSetSelectedExerciseIndex={setSelectedExerciseIndex}
            lastExerciseIndex={day.exercises.length - 1}
            handleSetIndex={handleSelectExerciseIndex}
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
