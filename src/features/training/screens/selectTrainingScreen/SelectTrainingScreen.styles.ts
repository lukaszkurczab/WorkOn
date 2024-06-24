import { StyleSheet } from 'react-native';
import { dark_gray, blue, gray, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 32,
  },
  button: {
    backgroundColor: gray,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selectedButton: {
    backgroundColor: blue,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: dark_gray,
  },
  selectedButtonText: {
    color: primaryColor,
  },
  buttonContainer: {
    gap: 16,
  },
});

export default styles;
