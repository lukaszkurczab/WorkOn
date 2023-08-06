import { StyleSheet } from 'react-native';
import { fillColor, primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: fillColor,
    justifyContent: 'center',
    height: 140,
    width: '45%',
    flexShrink: 1,
  },
  icon:{
    alignSelf: 'center',
    marginBottom: 10,
    color: primaryColor
  },
  text: {
    color: primaryColor,
  }
});

export default styles;