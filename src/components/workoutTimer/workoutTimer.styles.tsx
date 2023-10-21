import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: primaryColor,
    fontSize: 32,
    marginHorizontal: 10,
    fontWeight: '700',
    height: 50,
    lineHeight: 50
  },
});

export default styles;