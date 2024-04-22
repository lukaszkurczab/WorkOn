import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    zIndex: -1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 60,
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
