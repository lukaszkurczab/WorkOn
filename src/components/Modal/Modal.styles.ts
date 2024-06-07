import { StyleSheet, Dimensions } from 'react-native';
import { dark_gray, blue } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    width: width * 0.8,
    padding: 16,
    backgroundColor: dark_gray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: blue,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    alignItems: 'center',
  },
});
