import { StyleSheet } from 'react-native';
import { backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '50%',
    height: '30%',
    marginBottom: 16,
    resizeMode: 'contain',
  },
  indicator: {
    marginVertical: 20,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default styles;
