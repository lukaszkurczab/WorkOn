import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  iconWrapper: {
    borderWidth: 1,
    padding: 3,
    width: 20,
    height: 20,
    borderColor: secondaryColor,
  },
  icon: {
    color: secondaryColor,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default styles;
