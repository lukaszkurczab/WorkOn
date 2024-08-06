import { Dimensions, StyleSheet } from 'react-native';
import { backgroundColor, blue, primaryColor } from '../../../../styles/colors';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    height: screenHeight - 300,
    alignItems: 'center',
    paddingTop: 16,
  },
  daySection: {
    marginBottom: 16,
  },
  viewIcon: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  listText: {
    color: backgroundColor,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  listContainer: {
    gap: 8,
    marginVertical: 16,
  },
});

export default styles;
