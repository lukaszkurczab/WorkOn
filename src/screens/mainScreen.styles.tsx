import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor, textColor } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: primaryColor,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
  },
});

export default styles;