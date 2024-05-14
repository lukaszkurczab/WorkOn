import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, secondaryColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 60,
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
  placeholderStyle: {
    color: primaryColor,
  },
  selectedTextStyle: {
    color: primaryColor,
  },
  inputSearchStyle: {
    color: primaryColor,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: primaryColor,
    marginTop: 5,
    paddingHorizontal: 5,
    width: 250,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: primaryColor,
    color: primaryColor,
    marginTop: 5,
    height: 38,
    width: 60,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  addButton: {
    borderColor: primaryColor,
    borderWidth: 1,
    width: 70,
    alignItems: 'center',
    backgroundColor: secondaryColor,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 5,
  },
  addText: {
    color: backgroundColor,
    fontSize: 16,
  },
  text: {
    color: primaryColor,
    fontSize: 16,
    marginVertical: 10,
  },
  removeIcon: {
    marginLeft: 10,
    color: 'red',
  },
  confirmButton: {
    alignSelf: 'center',
    borderColor: secondaryColor,
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
