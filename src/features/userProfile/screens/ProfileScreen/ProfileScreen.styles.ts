import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, blue } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  contentWrapper: {
    gap: 32,
  },
  section: {
    marginTop: 20,
    gap: 10,
  },
  title: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  userDataWrapper: {
    alignItems: 'center',
  },
  userPhotoWrapper: {
    borderColor: blue,
    borderWidth: 1,
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPhoto: {
    color: primaryColor,
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    height: 32,
    width: 32,
    zIndex: 2,
  },
  settingsIcon: {
    color: primaryColor,
  },
});
