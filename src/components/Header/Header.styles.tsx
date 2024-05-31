import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-start',
    gap: 16,
    top: 64,
    left: 32,
    height: 75,
  },
  image: {
    width: 66,
    resizeMode: 'contain',
  },
});

export default styles;
