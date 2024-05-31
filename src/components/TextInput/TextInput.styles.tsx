import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#343434',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  input: {
    fontSize: 20,
    padding: 12,
    fontWeight: 'medium',
    color: primaryColor,
  },
  error: {
    color: '#ED0000',
    fontSize: 14,
    fontWeight: 'medium',
    position: 'absolute',
    left: 8,
    top: -8,
  },
});

export default styles;
