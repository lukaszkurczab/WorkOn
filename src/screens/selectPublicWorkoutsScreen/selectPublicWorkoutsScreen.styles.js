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
    marginVertical: 10,
    marginLeft: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  settingsIcon: {
    color: primaryColor,
  },
});
