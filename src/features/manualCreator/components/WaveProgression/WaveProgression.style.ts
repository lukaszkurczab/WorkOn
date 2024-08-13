import { StyleSheet } from 'react-native';
import { light_red, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    gap: 16,
    paddingBottom: 32,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: light_red,
  },
  daysList: {
    gap: 8,
  },
  waveContainer: {
    marginBottom: 8,
  },
  dayInput: {
    marginTop: 8,
    paddingRight: 32,
    gap: 8,
  },
});

export default styles;
