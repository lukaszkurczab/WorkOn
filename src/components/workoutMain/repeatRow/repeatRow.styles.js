import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    marginHorizontal: 50,
    height: 30,
  },
  iconsWrapper: {
    gap: 15,
    flexDirection: 'row',
    width: 60,
    justifyContent: 'center'
  },
  icon:{
    color: primaryColor,
  },
  disabledIcon: {
    color: secondaryColor
  },  
  reps: {
    color: primaryColor,
    fontSize: 24,
    width: '60%'
  },
  finishText: {
    color: primaryColor,
    fontSize: 16,
  }
});

export default styles;