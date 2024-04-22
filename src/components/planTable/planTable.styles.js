import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  head: {
    height: 40,
  },
  wrapper: {
    flexDirection: 'row',
  },
  row: {
    minHeight: 28,
  },
  headText: {
    textAlign: 'center',
    color: primaryColor,
    fontSize: 18,
  },
  rowText: {
    textAlign: 'center',
    color: primaryColor,
    fontSize: 14,
    lineHeight: 22,
  },
});

export default styles;
