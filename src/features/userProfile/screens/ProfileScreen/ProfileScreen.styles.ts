import { StyleSheet } from 'react-native';
import { primaryColor, blue, dark_gray } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  contentWrapper: {
    gap: 16,
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
    marginBottom: 16,
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
