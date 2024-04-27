import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  name: {
    color: backgroundColor,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
  },
  exerciseDetails: {
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
    gap: 5,
    marginBottom: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  serieRow: {
    flexDirection: 'row',
    gap: 5,
  },
  editText: {
    fontSize: 20,
  },
  editButton: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeButton: {
    borderWidth: 1,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    fontSize: 18,
    lineHeight: 18,
  },
});

export default styles;
