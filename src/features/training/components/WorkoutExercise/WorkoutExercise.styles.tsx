import { StyleSheet } from 'react-native';
import { primaryColor, blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
  },
  descWrapper: {
    marginTop: 32,
    gap: 8,
  },
  buttonText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingHorizontal: 16,
  },
  image: {
    marginTop: 16,
    width: 225,
    height: 225,
  },
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
