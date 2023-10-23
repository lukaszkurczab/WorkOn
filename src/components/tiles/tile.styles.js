import { StyleSheet } from 'react-native';
import { fillColor, primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  containerIcon: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: fillColor,
    justifyContent: 'center',
    height: 140,
    width: '45%',
    flexShrink: 1,
  },
  containerImage:{
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: fillColor,
    justifyContent: 'center',
    height: 160,
    width: '45%',
    flexShrink: 1,
  },
  icon:{
    alignSelf: 'center',
    marginBottom: 10,
    color: primaryColor
  },
  image:{
    alignSelf: 'center',
    height: 100,
    width: 90,
    marginBottom: 10,
  },
  textIcon: {
    color: primaryColor,
  },
  textImage: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '700'
  }
});

export default styles;