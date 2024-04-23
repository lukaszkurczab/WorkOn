import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 180,
    height: 200,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
});

export default styles;
