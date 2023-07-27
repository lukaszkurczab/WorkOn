import { StyleSheet } from 'react-native';
import { fillColor, secondaryColor, primaryColor, accentColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: fillColor,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: primaryColor,
    borderWidth: 2,
    borderLeftWidth: 0,
    padding: 5,
    paddingRight: 30,
    height: 150,
    width: '95%',
  },
  icon: {
    letterSpacing: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonText: {
    color: accentColor,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonHalf: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
});

export default styles;