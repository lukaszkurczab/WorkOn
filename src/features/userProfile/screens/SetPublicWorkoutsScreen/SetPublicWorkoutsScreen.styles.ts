import { StyleSheet } from 'react-native';
import { dark_gray } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  listItem: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: dark_gray,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  toggleSwitchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
});
