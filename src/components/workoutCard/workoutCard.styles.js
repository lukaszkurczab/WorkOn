import { StyleSheet } from 'react-native';
import { fillColor, primaryColor } from '../../styles/colors';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: fillColor,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 1,
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
