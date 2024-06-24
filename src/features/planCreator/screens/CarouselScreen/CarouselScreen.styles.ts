import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'space-between',
    height: 320,
    alignItems: 'center',
  },
  text: {
    color: backgroundColor,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: primaryColor,
    marginHorizontal: 60,
  },
  button: {
    marginLeft: 32,
    marginBottom: 16,
    width: 120,
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
});

export default styles;
