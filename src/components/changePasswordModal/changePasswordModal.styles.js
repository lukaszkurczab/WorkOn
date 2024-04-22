import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(16,16,16,.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapper: {
    backgroundColor: primaryColor,
    width: '80%',
    maxHeight: '60%',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 0,
    fontSize: 16,
    height: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default styles;
