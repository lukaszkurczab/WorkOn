import { StyleSheet } from 'react-native';
import { fillColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    backgroundColor: fillColor,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 100,
    height: 80,
  },
  info: {
    padding: 10,
    flex: 1,
  },
  type: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});
