import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor, fillColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    marginTop: 30,
    backgroundColor: secondaryColor
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: secondaryColor,
    gap: 2,
  },
  headerCell: {
    alignItems: 'center',
    backgroundColor: fillColor,
    flexGrow: 1,
    height: 20,
    justifyContent: 'center'
  },
  headerCellActive: {
    backgroundColor: backgroundColor,
  },
  headerText: {
    color: primaryColor,
  },
  body: {
    backgroundColor: backgroundColor,
    flexGrow: 1,
    borderWidth: 2,
    borderColor: secondaryColor,
  }
});

export default styles;