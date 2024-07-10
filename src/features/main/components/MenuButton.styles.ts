import { StyleSheet } from 'react-native';
import { dark_gray, blue, gray } from '../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: gray,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: dark_gray,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
