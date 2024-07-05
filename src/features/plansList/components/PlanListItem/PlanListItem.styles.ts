import { StyleSheet } from 'react-native';
import { backgroundColor, dark_gray, gray, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: dark_gray,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: gray,
  },
  iconWrapper: {
    width: 32,
    alignItems: 'center',
  },
  icon: {
    color: primaryColor,
  },
  dropdownMenu: {
    position: 'absolute',
    left: -88,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: backgroundColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 1000,
    width: 90,
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
