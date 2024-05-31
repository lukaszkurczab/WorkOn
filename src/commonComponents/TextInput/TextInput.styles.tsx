import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 4,
  },
  inputWithEdit: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#8b0000',
  },
  editIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  errorText: {
    marginTop: 4,
    color: 'red',
  },
});

export default styles;
