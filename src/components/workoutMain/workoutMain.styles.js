import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 60,
    backgroundColor: fillColor,
    flexGrow: 1,
  },
  title: {
    color: primaryColor,
    fontSize: 32,
    marginBottom: 35,
    fontWeight: '700',
    alignSelf: 'center'
  },
  seriesWrapper:{
    gap: 10
  },
  timers:{
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
    position: 'relative',
    top: -60
  },
  timersText: {
    color: primaryColor,
    fontSize: 24,
    marginBottom: 5
  },
  descWrapper: {
    marginHorizontal: 30,
    marginTop: 40,
    gap: 15
  },
  descTitle: {
    color: primaryColor,
    fontSize: 24
  },
  descText: {
    color: primaryColor,
    fontSize: 16
  },
  buttonWrapper: {
    position: 'absolute',
    right: 20,
    top: 88
  }
});

export default styles;