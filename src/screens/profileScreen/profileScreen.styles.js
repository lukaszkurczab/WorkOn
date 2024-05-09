import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 60,
  },
  section: {
    marginTop: 20,
  },
  title: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsButton: {
    position: 'absolute',
    right: 10,
  },
  settingsIcon: {
    color: primaryColor,
  },
});
