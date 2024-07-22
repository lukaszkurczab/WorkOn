import { Dimensions, StyleSheet } from 'react-native';
import { backgroundColor, blue, primaryColor } from '../../../../styles/colors';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: backgroundColor,
  },
  selectedExerciseItem: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: primaryColor,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: primaryColor,
  },
  button: {
    width: 120,
    borderRadius: 0,
  },
  listWrapper: {
    height: screenHeight - 398,
  },
});

export default styles;
