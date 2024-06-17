import { StyleSheet } from 'react-native';
import { backgroundColor, dark_gray, gray } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 1,
    gap: 1,
    backgroundColor: dark_gray,
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: backgroundColor,
    backgroundColor: gray,
  },
  list: {
    paddingTop: 1,
    gap: 1,
  },
});

export default styles;
