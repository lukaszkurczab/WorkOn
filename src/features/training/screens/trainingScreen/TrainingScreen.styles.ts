import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    width: '100%',
  },
  timerWrapper: {
    right: 0,
    alignItems: 'flex-end',
  },
  timerText: {
    color: primaryColor,
    fontSize: 24,
    marginBottom: 5,
  },
});

export default styles;
