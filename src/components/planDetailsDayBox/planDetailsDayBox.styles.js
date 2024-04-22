import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: '500',
    fontSize: 28,
    marginTop: 15,
  },
  exercisesWrapper: {
    backgroundColor: secondaryColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    gap: 5,
  },
});

export default styles;
