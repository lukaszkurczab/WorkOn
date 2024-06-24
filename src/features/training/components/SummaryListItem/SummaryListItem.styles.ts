import { StyleSheet } from 'react-native';
import { primaryColor, blue, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: primaryColor,
    borderColor: blue,
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default styles;
