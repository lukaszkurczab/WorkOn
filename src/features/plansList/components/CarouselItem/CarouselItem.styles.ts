import { Dimensions, StyleSheet } from 'react-native';
import { backgroundColor, blue, primaryColor } from '../../../../styles/colors';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight - 332,
  },
  text: {
    alignSelf: 'center',
    color: backgroundColor,
  },
  header: {
    marginVertical: 16,
  },
  textInput: {
    width: 45,
    textAlign: 'center',
    fontSize: 16,
  },
  seriesScrollView: {
    height: 327,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  viewIcon: {
    color: blue,
  },
  selectedExerciseText: {
    color: backgroundColor,
  },
  editWrapper: {
    gap: 1,
    backgroundColor: backgroundColor,
    paddingTop: 1,
  },
});

export default styles;
