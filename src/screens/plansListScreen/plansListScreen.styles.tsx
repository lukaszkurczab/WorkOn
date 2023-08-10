import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: backgroundColor,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
    marginBottom: 20
  },
  image: {
    height: 250,
    width: 200
  },
  tilesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: secondaryColor,
    width: 200,
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