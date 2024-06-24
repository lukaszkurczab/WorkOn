import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  inputs: {
    gap: 12,
    width: '100%',
    marginBottom: 12,
  },
  signInText: {
    color: secondaryColor,
    marginTop: 20,
  },
  signInButton: {
    color: '#06f',
    fontWeight: 'bold',
  },
  signInWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
