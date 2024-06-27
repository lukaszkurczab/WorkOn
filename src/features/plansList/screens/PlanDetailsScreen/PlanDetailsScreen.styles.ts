import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginLeft: -64,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 16,
    marginLeft: 32,
    width: '100%',
  },
  button: {
    width: '45%',
  },
});

export default styles;
