import { StyleSheet } from 'react-native';
import { fillColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: fillColor,
    borderRadius: 10,
    marginVertical: 10,
  },
  recordContainer: {
    alignItems: 'flex-start',
    gap: 5,
  },
  record: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recordTitle: {
    color: '#aaa',
    fontSize: 18,
  },
  recordValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
