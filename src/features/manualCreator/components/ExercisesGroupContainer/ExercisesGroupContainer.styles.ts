import { StyleSheet } from 'react-native';
import { primaryColor, dark_gray } from '../../../../styles/colors';

const styles = StyleSheet.create({
  groupWrapper: {
    width: '100%',
  },
  groupTitle: {
    backgroundColor: dark_gray,
    padding: 8,
    justifyContent: 'center',
  },
  exercisesWrapper: {
    backgroundColor: dark_gray,
    gap: 2,
  },
  exercise: {
    backgroundColor: primaryColor,
    padding: 8,
  },
});

export default styles;
