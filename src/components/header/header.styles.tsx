import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  image: {
    width: 48,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 100,
    marginRight: 20,
  },
  text: {
    width: 48,
    resizeMode: 'contain',
  },
  textContainer: {
    width: 100,
    marginRight: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: primaryColor,
  }
});

export default styles;