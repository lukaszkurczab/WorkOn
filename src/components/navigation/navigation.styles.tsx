import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: primaryColor,
  },
  button: {},
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    lineHeight: 25,
    color: primaryColor,
  },
});

export default styles;