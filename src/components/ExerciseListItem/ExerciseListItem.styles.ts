import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 48,
    alignItems: 'center',
    backgroundColor: primaryColor,
    flexDirection: 'row',
  },
  text: {
    color: backgroundColor,
  },
  icon: {
    color: backgroundColor,
  },
  iconButton: {
    height: 48,
    width: 24,
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    paddingRight: 16,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
