import { StyleSheet } from 'react-native';
import { light_red } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    gap: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 120,
  },
  icon: {
    color: light_red,
  },
  daysList: {
    gap: 8,
  },
});

export default styles;
