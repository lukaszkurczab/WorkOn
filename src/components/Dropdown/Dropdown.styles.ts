import { StyleSheet } from 'react-native';
import { backgroundColor, dark_gray, gray, primaryColor, light_red } from '../../styles/colors';

export default StyleSheet.create({
  chevron: {
    color: primaryColor,
  },
  container: {
    width: '100%',
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: dark_gray,
    borderRadius: 8,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownError: {
    borderColor: light_red,
    borderWidth: 1,
  },
  dropdownText: {
    color: gray,
    fontWeight: '500',
  },
  listContainer: {
    marginTop: 8,
    backgroundColor: dark_gray,
    borderRadius: 8,
    maxHeight: 150,
    overflow: 'hidden',
  },
  item: {
    padding: 8,
    paddingHorizontal: 16,
  },
  itemText: {
    color: backgroundColor,
  },
  error: {
    color: light_red,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
});
