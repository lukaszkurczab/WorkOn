import { StyleSheet } from 'react-native';
import { primaryColor, gray, blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    borderColor: blue,
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
    color: blue,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0.8,
  },
  text: {
    color: primaryColor,
    marginTop: 16,
    textAlign: 'center',
  },
  title: {
    paddingVertical: 8,
  },
  tilesWrapper: {
    gap: 16,
  },
  buttonTextPreview: {
    color: primaryColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: 0.8,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default styles;
