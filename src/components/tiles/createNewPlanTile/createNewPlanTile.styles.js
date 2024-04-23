import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: fillColor,
    height: 140,
    justifyContent: 'space-evenly',
  },
  text: {
    color: primaryColor,
    fontSize: 28,
  },
  textWrapper: {
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: primaryColor,
    borderRadius: 5,
  },
  buttonText: {
    color: backgroundColor,
    fontSize: 22,
  },
});

export default styles;
