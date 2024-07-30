import { StyleSheet } from 'react-native';

export const StepperFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  step: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  completedStep: {
    backgroundColor: 'blue',
  },
  incompleteStep: {
    backgroundColor: 'gray',
  },
  progressText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  stepContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  exitButton: {
    marginVertical: 10,
  },
});
