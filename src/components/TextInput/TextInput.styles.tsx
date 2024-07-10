import { StyleSheet } from 'react-native';
import { primaryColor, light_red } from '../../styles/colors';

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 8,
    width: '100%',
    padding: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    padding: 8,
    fontWeight: '500',
    color: primaryColor,
    flex: 1,
  },
  leftComponent: {
    marginRight: 8,
  },
  rightComponent: {
    marginLeft: 8,
  },
  error: {
    color: light_red,
    fontSize: 14,
    fontWeight: '500',
    position: 'absolute',
    left: 8,
    top: -8,
  },
});

export default styles;
