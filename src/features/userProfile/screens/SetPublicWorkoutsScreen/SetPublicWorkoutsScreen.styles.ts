import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, gray } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 61,
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
  tileWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  publicButtonWrapper: {
    width: 50,
    marginTop: 35,
  },
  confirmButton: {
    alignSelf: 'center',
    borderColor: gray,
    backgroundColor: primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginVertical: 20,
  },
  confirmText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
