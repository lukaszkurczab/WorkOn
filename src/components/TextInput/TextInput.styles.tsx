import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#343434',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    color: '#ED0000',
    fontSize: 14,
    fontWeight: '500',
    position: 'absolute',
    left: 8,
    top: -8,
  },
});

export default styles;
