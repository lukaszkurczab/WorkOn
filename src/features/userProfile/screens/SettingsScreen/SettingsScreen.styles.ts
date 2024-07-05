import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, gray } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: gray,
  },
  logout: {
    color: 'red',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopColor: gray,
    borderTopWidth: 1,
    marginTop: 5,
  },
});
