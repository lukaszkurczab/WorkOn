import { StyleSheet } from 'react-native';
import { light_red } from '../../../../styles/colors';

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
  modal_text: {
    textAlign: 'center',
  },
  modal_buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  modal_button: {
    width: 100,
  },
  icon: {
    color: light_red,
  },
  daysList: {
    gap: 8,
  },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default styles;
