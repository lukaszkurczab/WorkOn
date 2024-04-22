import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: backgroundColor,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    zIndex: 10,
    width: '80%',
    top: 25,
    height: 600,
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 25,
    backgroundColor: fillColor,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: primaryColor,
  },
  exercisesList: {
    marginTop: 30,
    gap: 15,
    minHeight: 450,
  },
  checkboxRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  checkboxText: {
    color: primaryColor,
  },
});

export default styles;
