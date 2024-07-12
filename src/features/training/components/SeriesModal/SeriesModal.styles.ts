import { StyleSheet } from 'react-native';
import { primaryColor, blue, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
  },
  button: {
    marginTop: 8,
  },
  inputWrapper: {
    backgroundColor: primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  inputLabel: {
    color: backgroundColor,
  },
  input: {
    backgroundColor: primaryColor,
    width: 65,
    textAlign: 'center',
    borderRadius: 8,
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
