import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    zIndex: -1,
    paddingTop: 10,
    paddingBottom: 60,
  },
  username: {
    color: primaryColor,
    fontSize: 22,
  },
  nameWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
  email: {
    color: secondaryColor,
  },
  bio: {
    color: primaryColor,
  },
  changePasswordButton: {
    marginTop: 10,
    backgroundColor: primaryColor,
    paddingVertical: 5,
    alignItems: 'center',
    width: 140,
  },
  changePasswordText: {
    fontSize: 16,
  },
});

export default styles;
