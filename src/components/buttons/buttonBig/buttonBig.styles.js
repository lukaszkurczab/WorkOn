import { StyleSheet } from 'react-native';
import { primaryColor, accentColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    borderColor: primaryColor,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 200
  },
  text: {
    color: accentColor,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: .8,
  }
});

export default styles;