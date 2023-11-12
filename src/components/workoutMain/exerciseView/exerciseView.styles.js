import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
  },
  title: {
    color: primaryColor,
    fontSize: 32,
    marginBottom: 35,
    fontWeight: '700',
    textAlign: 'center'
  },
  seriesWrapper:{
    gap: 10
  },
  descWrapper: {
    marginHorizontal: 30,
    marginTop: 40,
    gap: 15
  },
  descTitle: {
    color: primaryColor,
    fontSize: 24,
  },
  descText: {
    color: primaryColor,
    fontSize: 16
  },
  titleWrapper: {
    maxWidth: '70%',
    alignSelf: 'center',
    position: 'relative'
  }
});

export default styles;