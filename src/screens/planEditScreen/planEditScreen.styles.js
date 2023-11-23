import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor, fillColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: backgroundColor,
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
    marginBottom: 15
  },  
  planName: {
    color: backgroundColor,
    fontSize: 22,
    flexGrow: 1
  },  
  planType: {
    color: backgroundColor,
    fontSize: 22,
    width: '50%'
  },
  planTypeButton: {
    flexGrow: 1,
    backgroundColor: secondaryColor,
    height: '100%',
  },
  planTypeButtonText: {
    alignSelf: 'center',
    lineHeight: 26
  },
  planTypeButtonActive: {
    backgroundColor: backgroundColor,
  },
  planTypeButtonTextActive: {
    color: secondaryColor,
  },
  icon: {
    color: backgroundColor,
    marginLeft: 10
  }
});

export default styles;