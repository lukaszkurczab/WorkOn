import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, secondaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondaryColor,
    width: 150,
    height: 240,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  image: {
    width: 140,
    height: 160,
    borderRadius: 15,
  },
  nameWrapper: {
    height: 60,
  },
  name: {
    color: fillColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
