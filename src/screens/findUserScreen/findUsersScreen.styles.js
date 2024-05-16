import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 60,
  },
  searchWrapper: {
    backgroundColor: primaryColor,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  input: {
    width: '100%',
    flexShrink: 1,
  },
});
