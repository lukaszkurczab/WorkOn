import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexGrow: 1,
    marginBottom: 5,
  },
  image:{
    width: 120,
    height: 90,
    borderRadius: 15,
  },
  textWrapper:{
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  title: {
    color: primaryColor,
    fontSize: 22,
    fontWeight: '600'
  },
  heading: {
    color: primaryColor,
    fontSize: 18,
  },
  chip: {
    backgroundColor: fillColor,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  chipText: {
    color: primaryColor,
    fontSize: 18,
  }
});

export default styles;