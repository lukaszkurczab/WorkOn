import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: fillColor,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    color: primaryColor,
    fontSize: 28
  },
  icon: {
    color: fillColor,
    marginLeft: 10
  },
  iconWrapper: {
    backgroundColor: primaryColor,
    width: 80,
    height: 80,
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    gap: 10
  }
});

export default styles;