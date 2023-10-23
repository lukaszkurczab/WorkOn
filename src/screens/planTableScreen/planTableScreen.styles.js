import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: backgroundColor,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
    marginBottom: 15
  },
  heading: {
    color: 'white',
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 15
  },
  text: {
    color: primaryColor,
  },
  buttonsWrapper:{
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: secondaryColor,
    width: 150,
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 20,
    alignSelf: 'center'
  },
  button: {
    color: backgroundColor,
    fontSize: 24,
    fontWeight: '600',
  },
  icon: {
    color: backgroundColor,
    marginRight: 15
  }
});

export default styles;