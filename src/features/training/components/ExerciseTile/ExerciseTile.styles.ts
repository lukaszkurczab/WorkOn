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
    width: 96,
    height: 96,
  },
  textWrapper: {
    height: '100%',
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
