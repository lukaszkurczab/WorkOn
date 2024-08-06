import { Dimensions, StyleSheet } from 'react-native';
import { backgroundColor, blue, primaryColor } from '../../../../styles/colors';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: backgroundColor,
  },
  textInput: {
    width: 45,
    textAlign: 'center',
    fontSize: 16,
  },
  seriesScrollView: {
    height: screenHeight - 529,
    backgroundColor: primaryColor,
    gap: 1,
  },
  row: {
    flexDirection: 'row',
    color: backgroundColor,
    backgroundColor: primaryColor,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addExerciseButton: {
    backgroundColor: primaryColor,
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addExerciseButtonText: {
    color: blue,
    fontWeight: '500',
  },
  button: {
    width: 120,
    borderRadius: 0,
  },
  exercisesList: {
    height: screenHeight - 414,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: primaryColor,
  },
  selectedExercisesContainer: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    gap: 1,
  },
  selectedExerciseItem: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: primaryColor,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedExerciseText: {
    color: backgroundColor,
  },
  editWrapper: {
    gap: 1,
    backgroundColor: backgroundColor,
  },
  listText: {
    color: backgroundColor,
    paddingHorizontal: 16,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: primaryColor,
    marginBottom: 8,
  },
});

export default styles;
