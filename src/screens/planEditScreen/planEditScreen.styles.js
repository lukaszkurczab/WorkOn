import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor, fillColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
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
    marginBottom: 15,
  },
  planName: {
    color: backgroundColor,
    fontSize: 22,
    flexGrow: 1,
  },
  icon: {
    color: backgroundColor,
    marginLeft: 10,
  },
  saveButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: secondaryColor,
    width: 150,
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  saveButton: {
    color: backgroundColor,
    fontSize: 24,
    fontWeight: '600',
  },
  saveIcon: {
    color: backgroundColor,
    marginRight: 15,
  },
});

export default styles;
