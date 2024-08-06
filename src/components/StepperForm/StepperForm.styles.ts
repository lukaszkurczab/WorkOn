import { StyleSheet } from 'react-native';
import { blue, gray } from '../../styles/colors';

export const StepperFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  step: {
    flexGrow: 1,
    height: 8,
    borderRadius: 4,
  },
  completedStep: {
    backgroundColor: blue,
  },
  incompleteStep: {
    backgroundColor: gray,
  },
  stepContent: {
    flex: 1,
    marginTop: 16,
    overflow: 'hidden',
  },
  navigation: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 16,
  },
  button: {
    flexShrink: 1,
  },
});
