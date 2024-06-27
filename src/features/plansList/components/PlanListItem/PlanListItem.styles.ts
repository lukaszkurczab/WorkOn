import { StyleSheet } from 'react-native';
import { dark_gray, gray, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    flexDirection: 'column',
    backgroundColor: dark_gray,
    marginBottom: 16,
  },
  text: {
    color: gray,
  },
});

export default styles;
