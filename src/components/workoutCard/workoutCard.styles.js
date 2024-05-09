import { StyleSheet } from 'react-native';
import { fillColor } from '../../styles/colors';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: fillColor,
    borderRadius: 10,
    marginVertical: 8,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 80,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  type: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
});
