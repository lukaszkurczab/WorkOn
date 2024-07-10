import { StyleSheet } from 'react-native';
import { blue, gray } from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containedButton: {
    backgroundColor: blue,
  },
  containedButtonDisabled: {
    backgroundColor: gray,
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  textButtonDisabled: {
    backgroundColor: 'transparent',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: blue,
  },
  outlinedButtonDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: gray,
  },
});
