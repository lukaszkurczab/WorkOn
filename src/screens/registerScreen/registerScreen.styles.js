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
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: secondaryColor,
    borderRadius: 5,
    backgroundColor: '#333',
    color: primaryColor,
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
});

export default styles;
