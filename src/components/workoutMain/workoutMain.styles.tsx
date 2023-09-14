import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 60,
    backgroundColor: fillColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    position: 'relative'
  },
  title: {
    color: primaryColor,
    fontSize: 32,
    marginTop: 15,
    fontWeight: '700'
  },
  image:{
    width: 300,
    height: 300,
    borderRadius: 15
  },
  icon:{
    color: primaryColor
  },
  navigationWrapper:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 30
  },
  reps: {
    color: primaryColor,
    fontSize: 28,
  }
});

export default styles;