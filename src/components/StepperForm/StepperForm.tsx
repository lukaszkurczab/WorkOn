import React from 'react';
import { View } from 'react-native';
import { StepperFormStyles as styles } from './StepperForm.styles';
import Button from '../Button/Button';
import { Typography } from '../Typography/Typography';

interface StepperFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: React.ReactNode[];
  showNavigation?: boolean;
  onSubmit: () => void;
  onExit: () => void;
}

const StepperForm: React.FC<StepperFormProps> = ({
  onSubmit,
  currentStep,
  setCurrentStep,
  steps,
  showNavigation = true,
  onExit,
}) => {
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
    onExit();
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
      {showNavigation && (
        <View style={styles.navigation}>
          <Button onPress={previousStep} disabled={currentStep === 0} style={styles.button}>
            <Typography variant="h3">Back</Typography>
          </Button>
          {currentStep !== totalSteps - 1 ? (
            <Button onPress={nextStep} style={styles.button}>
              <Typography variant="h3">Next</Typography>
            </Button>
          ) : (
            <Button onPress={onSubmit} style={styles.button}>
              <Typography variant="h3">Submit</Typography>
            </Button>
          )}
        </View>
      )}
      <Button variant="text" onPress={exitForm}>
        <Typography variant="h3">Exit</Typography>
      </Button>
    </View>
  );
};

export default StepperForm;
