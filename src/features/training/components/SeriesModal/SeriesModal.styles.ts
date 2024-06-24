import { StyleSheet } from 'react-native';
import { primaryColor, blue, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 25,
    backgroundColor: blue,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: primaryColor,
  },
  inputWrapper: {
    backgroundColor: primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 8,
  },
  inputLabel: {
    fontSize: 16,
  },
  input: {
    paddingVertical: 8,
    backgroundColor: primaryColor,
    width: 65,
    shadowOpacity: 0,
  },
  inputText: {
    color: backgroundColor,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    color: primaryColor,
  },
});

export default styles;
