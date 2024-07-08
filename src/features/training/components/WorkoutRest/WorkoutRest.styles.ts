import { StyleSheet } from 'react-native';
import { primaryColor, blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stoperText: {
    color: primaryColor,
    lineHeight: 48,
    width: 160,
    fontSize: 48,
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -140 }, { translateY: -16 }],
  },
  stoper: {
    height: 200,
    marginBottom: 16,
  },
  stoperWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 240,
  },
  seriesWrapper: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: -64,
  },
});

export default styles;
