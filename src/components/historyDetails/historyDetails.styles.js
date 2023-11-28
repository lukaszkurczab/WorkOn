import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 60
  },
  headingWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: primaryColor,
  },
  name: {
    color: backgroundColor,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5
  },
  date: {
    color: backgroundColor,
    fontSize: 16
  },
  text: {
    color: backgroundColor,
    fontSize: 18,
    marginTop: 10
  },
  listWrapper: {
    maxHeight: 200,
  },
});

export default styles;