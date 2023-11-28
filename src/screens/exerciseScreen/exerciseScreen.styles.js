import { StyleSheet } from 'react-native';
import { secondaryColor,fillColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: backgroundColor,
  },
  title: {
    color: primaryColor,
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 15,
    alignSelf: 'center'
  },
  text: {
    color: primaryColor,
    textAlign: 'justify',
    fontSize: 16
  },
  sectionTitle:{
    color: primaryColor,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  icon: {
    color: 'black',
    position: 'relative',
    left: -2
  },
  buttonWrapper: {
    height: 0,
    position: 'absolute',
    bottom: 150,
    right: 30
  },
  button: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    zIndex: 10
  },
  image:{
    width: 240,
    height: 180,
    borderRadius: 15,
    alignSelf: 'center'
  },
  chip: {
    backgroundColor: fillColor,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  chipText: {
    color: primaryColor,
    fontSize: 12,
  }
});

export default styles;