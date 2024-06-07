import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  h1: {
    color: primaryColor,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 54,
  },
  h2: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: 'semibold',
    lineHeight: 36,
  },
  h3: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'medium',
    lineHeight: 30,
  },
  h4: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: 'medium',
    lineHeight: 24,
  },
  h5: {
    color: primaryColor,
    fontSize: 14,
    fontWeight: 'medium',
    lineHeight: 21,
  },
  h6: {
    color: primaryColor,
    fontSize: 12,
    fontWeight: 'regular',
    lineHeight: 18,
  },
});

export default styles;