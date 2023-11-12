import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute'
  },
  iconsWrapper: {
    gap: 15,
    flexDirection: 'row'
  },
  icon:{
    color: primaryColor,
  },
  reps: {
    color: primaryColor,
    fontSize: 24,
    width: '60%'
  },
});

export default styles;