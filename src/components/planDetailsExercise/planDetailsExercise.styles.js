import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  name: {
    color: backgroundColor,
    fontSize: 18,
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
  moreButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});

export default styles;
