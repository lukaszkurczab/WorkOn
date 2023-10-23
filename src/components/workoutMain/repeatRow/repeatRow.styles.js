import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    marginHorizontal: 50
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