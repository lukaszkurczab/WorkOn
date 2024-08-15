import { StyleSheet } from 'react-native';
import { dark_gray, primaryColor, blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 32,
    gap: 8,
  },
  button: {
    flexShrink: 1,
    backgroundColor: dark_gray,
  },
  selected: {
    backgroundColor: blue,
  },
});

export default styles;
