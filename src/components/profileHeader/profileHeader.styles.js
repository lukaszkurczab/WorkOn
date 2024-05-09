import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
