import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from './colors';

const commonStyles = StyleSheet.create({
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: secondaryColor,
    borderRadius: 5,
    backgroundColor: '#333',
    color: primaryColor,
  },
});

export default commonStyles;
