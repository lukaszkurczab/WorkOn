import React from 'react';
import { View } from 'react-native';
import { StepperFormStyles as styles } from './StepperForm.styles';
import Button from '../Button/Button';
import { Typography } from '../Typography/Typography';

interface StepperFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: React.ReactNode[];
}

const StepperForm: React.FC<StepperFormProps> = ({ currentStep, setCurrentStep, steps }) => {
  const totalSteps = steps.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const exitForm = () => {
    console.log('Exit form');
  };

  const renderProgressSteps = () => {
    return (
      <View style={styles.progressContainer}>
        {steps.map((_, index) => {
          const stepStyle = index <= currentStep ? styles.completedStep : styles.incompleteStep;
          return <View key={index} style={[styles.step, stepStyle]} />;
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderProgressSteps()}
      <View style={styles.stepContent}>{steps[currentStep]}</View>
      <View style={styles.navigation}>
        <Button onPress={previousStep} disabled={currentStep === 0} style={styles.button}>
          <Typography variant="h3">Back</Typography>
        </Button>
        <Button onPress={nextStep} disabled={currentStep === totalSteps - 1} style={styles.button}>
          <Typography variant="h3">Next</Typography>
        </Button>
      </View>
      <Button variant="text" onPress={exitForm}>
        <Typography variant="h3">Exit</Typography>
      </Button>
    </View>
  );
};

export default StepperForm;
