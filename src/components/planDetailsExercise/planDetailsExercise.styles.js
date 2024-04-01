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
});

export default styles;
