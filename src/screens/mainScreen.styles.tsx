import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor, textColor } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor,
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
  image: {
    height: 250,
    width: 200
  }
});

export default styles;