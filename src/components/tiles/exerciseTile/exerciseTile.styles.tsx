import { StyleSheet } from 'react-native';
import { backgroundColor, fillColor, primaryColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image:{
    width: 80,
    height: 60,
    borderRadius: 15,
  },
  textWrapper:{
    marginLeft: 15,
    flexShrink: 1
  },
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
  },
  heading: {
    color: primaryColor,
    fontSize: 14,
  },
  chip: {
    backgroundColor: fillColor,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  chipText: {
    color: primaryColor,
    fontSize: 12,
  }
});

export default styles;