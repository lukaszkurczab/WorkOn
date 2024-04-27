import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: '#333',
    color: secondaryColor,
    borderRadius: 5,
  },
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
  signUpText: {
    color: secondaryColor,
    marginTop: 20,
  },
  signUpButton: {
    color: '#06f',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: primaryColor,
  },
  image: {
    width: 180,
    height: 200,
  },
});

export default styles;
