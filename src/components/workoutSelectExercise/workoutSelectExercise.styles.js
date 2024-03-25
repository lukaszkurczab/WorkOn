import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, accentColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 60,
    backgroundColor: fillColor,
  },
  buttonWrapper: {
    borderColor: accentColor,
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    width: 220,
    alignSelf: 'center',
  },
  buttonText: {
    color: accentColor,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0.8,
  },
  text: {
    color: primaryColor,
    fontSize: 22,
    marginTop: 15,
    textAlign: 'center',
  },
  title: {
    color: primaryColor,
    fontSize: 24,
  },
  tilesWrapper: {
    flexWrap: 'wrap',
    rowGap: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    marginBottom: 20,
  },
});

export default styles;
