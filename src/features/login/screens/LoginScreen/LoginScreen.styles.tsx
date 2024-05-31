import { StyleSheet } from 'react-native';
import { backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  signUpButton: {
    color: '#06f',
    fontWeight: 'bold',
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
