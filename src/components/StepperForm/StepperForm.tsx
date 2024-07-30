import React from 'react';
import { View, Text, Button } from 'react-native';
import { StepperFormStyles as styles } from './StepperForm.styles';

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
      <Text style={styles.progressText}>
        Step {currentStep + 1} of {totalSteps}
      </Text>
      <View style={styles.stepContent}>{steps[currentStep]}</View>
      <View style={styles.navigation}>
        <Button title="Previous" onPress={previousStep} disabled={currentStep === 0} />
        <Button title="Next" onPress={nextStep} disabled={currentStep === totalSteps - 1} />
      </View>
      <View style={styles.exitButton}>
        <Button title="Exit" onPress={exitForm} />
      </View>
    </View>
  );
};

export default StepperForm;
