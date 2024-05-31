import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
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
    marginTop: 20,
  },
});

export default styles;
