import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#06f',
    padding: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  signInText: {
    color: secondaryColor,
    marginTop: 20,
  },
  signInButton: {
    color: '#06f',
    fontWeight: 'bold',
  },
  signInWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signInText: {
    color: secondaryColor,
  },
  signInButton: {
    color: '#06f',
    fontWeight: 'bold',
  },
  ...commonStyles,
});

export default styles;
