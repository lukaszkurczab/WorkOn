import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    gap: 16,
    paddingBottom: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
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
  modalBody: {
    alignItems: 'center',
    gap: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 32,
  },
  modalButton: {
    flexShrink: 1,
  },
});

export default styles;
