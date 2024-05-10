import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, secondaryColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 60,
  },
  header: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: secondaryColor,
    fontSize: 16,
  },
  logout: {
    color: 'red',
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingVertical: 5,
  },
  settingsIcon: {
    color: primaryColor,
  },
});
