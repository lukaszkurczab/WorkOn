import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, accentColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  stoperText: {
    color: primaryColor,
    lineHeight: 48,
    width: 160,
    fontSize: 48,
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -80 }, { translateY: -16 }],
  },
  stoper: {
    marginTop: 50,
    marginBottom: 20,
    height: 200,
  },
  stoperWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    transform: [{ translateX: -100 }],
  },
  buttonWrapper: {
    borderColor: accentColor,
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    width: 240,
    alignSelf: 'center',
  },
  buttonText: {
    color: accentColor,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
  buttonTextPreview: {
    color: primaryColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: 0.8,
    textDecorationLine: 'underline',
  },
});

export default styles;
