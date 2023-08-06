import { StyleSheet } from 'react-native';
import { backgroundColor, secondaryColor, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  dropdownWrapper: {
    position: 'relative'
  },
  dropdownButton: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderRadius: 15,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  dropdownButtonText: {
    color: secondaryColor,
    fontSize: 16,
  },
  dropdownButtonIcon:{
    color: secondaryColor,
  },
  itemsWrapper: {
    backgroundColor: secondaryColor,
    borderRadius: 15,
    padding: 10,
    position: 'absolute',
    top: 35,
    width: '100%',
  },
  itemsWrapper__hidden: {
    display: 'none'
  },
  dropdownItem: {
    color: backgroundColor,
    height: 25
  },
});

export default styles;