import { StyleSheet } from 'react-native';
import { blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  signUpButton: {
    color: blue,
  },
  image: {
    width: 180,
    height: 200,
  },
  inputs: {
    marginTop: 12,
    gap: 8,
    width: '100%',
    marginBottom: 8,
  },
  button: {
    marginVertical: 8,
    width: '100%',
  },
});

export default styles;
