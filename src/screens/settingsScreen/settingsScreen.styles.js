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
    paddingHorizontal: 5,
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopColor: secondaryColor,
    borderTopWidth: 1,
    marginTop: 5,
  },
  settingsIcon: {
    color: primaryColor,
  },
  input: {
    borderWidth: 1,
    borderColor: primaryColor,
    color: secondaryColor,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  confirmButton: {
    borderColor: primaryColor,
    borderWidth: 1,
    width: 70,
    alignItems: 'center',
    backgroundColor: secondaryColor,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  confirmText: {
    color: backgroundColor,
    fontSize: 16,
  },
});
