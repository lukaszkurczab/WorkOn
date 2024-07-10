import { StyleSheet } from 'react-native';
import { blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  inputs: {
    gap: 12,
    width: '100%',
    marginBottom: 12,
  },
  signInButton: {
    color: blue,
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
