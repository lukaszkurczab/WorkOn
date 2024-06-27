import { StyleSheet } from 'react-native';
import { blue, primaryColor, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  icon: {
    color: 'black',
    position: 'relative',
    left: -2,
  },
  image: {
    width: 240,
    height: 250,
    borderRadius: 4,
    alignSelf: 'center',
  },
  chip: {
    backgroundColor: blue,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  chipText: {
    color: primaryColor,
    fontSize: 12,
  },
});

export default styles;
