import { StyleSheet } from 'react-native';
import { dark_gray, blue, gray } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 64,
    gap: 16,
  },
  button: {
    backgroundColor: gray,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  startButton: {
    backgroundColor: blue,
    marginBottom: 16,
  },
  buttonText: {
    color: dark_gray,
  },
});

export default styles;
