import { StyleSheet } from 'react-native';
import { primaryColor, accentColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    lineHeight: 20,
    color: primaryColor,
  },
  title: {
    color: primaryColor,
    fontSize: 32,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  descWrapper: {
    marginHorizontal: 30,
    marginTop: 40,
    gap: 15,
  },
  descTitle: {
    color: primaryColor,
    fontSize: 24,
  },
  descText: {
    color: primaryColor,
    fontSize: 16,
  },
  buttonWrapper: {
    borderColor: accentColor,
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    width: 160,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: accentColor,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
  image: {
    width: 300,
    height: 300,
  },
  reps: {
    color: primaryColor,
    fontSize: 32,
    marginBottom: 20,
  },
});

export default styles;
