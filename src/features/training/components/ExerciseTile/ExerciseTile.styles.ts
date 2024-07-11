import { StyleSheet } from 'react-native';
import { gray, dark_gray } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: dark_gray,
    height: 128,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    flexWrap: 'wrap',
  },
  series: {
    color: gray,
  },
});

export default styles;
