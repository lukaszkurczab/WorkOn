import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    gap: 3,
    zIndex: 10,
    width: 20,
    alignItems: 'center'
  },
  dot: {
    borderRadius: 4,
    height: 8,
    width: 8,
    backgroundColor: primaryColor
  }
});

export default styles;