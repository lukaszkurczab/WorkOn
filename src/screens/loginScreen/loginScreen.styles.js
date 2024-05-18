import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: secondaryColor,
    lineHeight: 60,
  },
  signUpButton: {
    color: '#06f',
    fontWeight: 'bold',
    lineHeight: 60,
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: primaryColor,
  },
  image: {
    width: 180,
    height: 200,
  },
  checkboxText: {
    color: secondaryColor,
  },
  ...commonStyles,
});

export default styles;
