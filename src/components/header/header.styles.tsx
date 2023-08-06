import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  image: {
    width: 60,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
  },
  textContainer: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    top: 15,
    marginHorizontal: 15,
  }
});

export default styles;