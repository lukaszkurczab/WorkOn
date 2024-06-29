import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    height: 'auto',
    padding: 16,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cell: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 16,
  },
  calendarContainer: {
    width: 280,
    height: 280,
    backgroundColor: primaryColor,
  },
  monthYearContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthCell: {
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yearCell: {
    width: 80,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
