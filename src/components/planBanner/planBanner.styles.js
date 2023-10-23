import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderColor: primaryColor,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text:{
    fontSize: 24,
    color: 'white',
    flexGrow: 1
  },
  icon:{
    marginLeft: 15,
    color: 'white',
  },
  image:{
    width: 60,
    height: 60,
    marginRight: 20
  }
});

export default styles;