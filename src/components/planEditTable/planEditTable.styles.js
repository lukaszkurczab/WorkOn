import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor, fillColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: { 
    backgroundColor: backgroundColor,
    borderWidth: 2,
    borderColor: secondaryColor,
    marginTop: 30,
    paddingBottom: 10,
    height: '70%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    backgroundColor: secondaryColor,
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
    marginBottom: 15
  }
});

export default styles;