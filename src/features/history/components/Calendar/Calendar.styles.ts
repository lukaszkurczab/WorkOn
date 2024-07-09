import { StyleSheet } from 'react-native';
import { blue, dark_gray, primaryColor } from '../../../../styles/colors';

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
    margin: 1,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  cellText: {
    fontSize: 16,
  },
  todayCell: {
    borderWidth: 1,
    borderColor: dark_gray,
  },
  markedDate: {
    backgroundColor: blue,
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
