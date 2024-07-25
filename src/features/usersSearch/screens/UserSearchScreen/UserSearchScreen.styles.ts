import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  unknownUserAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    width: 48,
    height: 48,
    alignSelf: 'flex-end',
  },
});

export default styles;
