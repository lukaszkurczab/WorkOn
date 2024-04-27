import { StyleSheet } from 'react-native';
import { backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 180,
    height: 200,
    marginBottom: 16,
  },
});

export default styles;
