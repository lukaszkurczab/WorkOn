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
    width: 160,
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
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  endButtonWrapper: {
    padding: 5,
    borderBottomWidth: 2,
    borderColor: primaryColor,
  },
  endButtonText: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
});

export default styles;
