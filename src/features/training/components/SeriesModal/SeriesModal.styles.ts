import { StyleSheet } from 'react-native';
import { primaryColor, blue, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: backgroundColor,
    borderRadius: 8,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: blue,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
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
    fontSize: 16,
    color: backgroundColor,
  },
  input: {
    paddingVertical: 8,
    backgroundColor: primaryColor,
    width: 80,
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
