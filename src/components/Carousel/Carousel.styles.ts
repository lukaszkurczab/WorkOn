import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
  },
  itemsWrapper: {
    position: 'relative',
    left: 32,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    width: screenWidth - 64,
  },
});

export default styles;
