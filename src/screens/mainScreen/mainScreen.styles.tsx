import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: primaryColor,
  },
  image: {
    height: 250,
    width: 200
  },
  tilesHeading: {
    color: primaryColor,
    fontWeight: '500',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 20,
    zIndex: -1
  },
  tilesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: 20,
  }
});

export default styles;