import { StyleSheet } from 'react-native';
import { primaryColor, blue } from '../../../../styles/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    borderColor: blue,
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    width: 220,
    alignSelf: 'center',
  },
});

export default styles;
