import { StyleSheet } from 'react-native';
import { backgroundColor, secondaryColor, primaryColor, fillColor } from '../../styles/colors';

const styles = StyleSheet.create({
  dropdownWrapper: {
    position: 'relative',
    zIndex: 10
  },
  dropdownButton: {
    alignItems: 'center',
    backgroundColor: fillColor,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  dropdownButtonText: {
    color: secondaryColor,
    fontSize: 20,
  },
  dropdownButtonIcon:{
    color: secondaryColor,
  },
  itemsWrapper: {
    backgroundColor: secondaryColor,
    borderRadius: 15,
    padding: 10,
    position: 'absolute',
    gap: 10,
    top: 55,
    width: '100%',
  },
  itemsWrapper__hidden: {
    display: 'none'
  },
  dropdownItem: {
    color: backgroundColor,
    fontSize: 18
  },
});

export default styles;