import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: 320,
    alignItems: 'center',
    padding: 16,
  },
  text: {
    color: backgroundColor,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: primaryColor,
    marginHorizontal: 60,
  },
});

export default styles;
