import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containedButton: {
    backgroundColor: '#0067FF',
  },
  containedButtonDisabled: {
    backgroundColor: '#A0A0A0',
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
    borderColor: '#0067FF',
  },
  outlinedButtonDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#A0A0A0',
  },
});
