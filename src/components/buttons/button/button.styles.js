import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#06f',
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: secondaryColor,
  },
  buttonText: {
    color: primaryColor,
    fontSize: 20,
    padding: 10,
  },
});

export default styles;
