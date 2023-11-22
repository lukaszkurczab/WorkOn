import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    backgroundColor: fillColor,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 5
  },
  time: {
    color: primaryColor,
    fontSize: 14,
    marginBottom: 25
  },
  listTitle: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 5
  },
  listWrapper: {
    gap: 10
  },
  timeText: {
    color: primaryColor,
    fontSize: 22,
    marginVertical: 25
  },
  button: {
    marginBottom: 60,
    alignSelf: 'center'
  }
});

export default styles;