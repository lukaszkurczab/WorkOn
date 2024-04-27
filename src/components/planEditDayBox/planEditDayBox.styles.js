import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
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
  text: {
    color: backgroundColor,
    fontSize: 18,
    fontWeight: '500',
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: primaryColor,
    borderWidth: 2,
    borderColor: secondaryColor,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  planName: {
    color: backgroundColor,
    fontSize: 22,
    flexGrow: 1,
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default styles;
