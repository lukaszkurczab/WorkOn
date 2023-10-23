import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  backgroundImage: {
    borderRadius: 12
  },
  container: {
    borderRadius: 12,
    alignItems: 'flex-end',
    height: 180,
    flexDirection: 'row',
    flexGrow: 1
  },
  title: {
    color: primaryColor,
    fontSize: 22,
    fontWeight: '600'
  },
  desc: {
    color: primaryColor,
    fontSize: 18
  },
  textWrapper: {
    backgroundColor: fillColor,
    width: '100%',
    padding: 10,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12
  }
});

export default styles;