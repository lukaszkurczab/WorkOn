import { StyleSheet } from 'react-native';
import { primaryColor, dark_gray, backgroundColor } from '../../../../styles/colors';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  iconButton: {
    backgroundColor: primaryColor,
    height: 41,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
