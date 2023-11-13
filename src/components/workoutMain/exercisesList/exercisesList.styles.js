import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: primaryColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 10,
    alignSelf: 'center',
    top: 85,
    width: '80%',
    borderWidth: 2,
    borderColor: backgroundColor,
    borderRadius: 5
  },
  rowText:{
    fontSize: 16, 
    fontWeight: '500',
    color: fillColor
  },
  exerciseRow: {
    paddingVertical: 5
  }
});

export default styles;