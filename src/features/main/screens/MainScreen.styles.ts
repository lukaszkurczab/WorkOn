import { StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../../../styles/colors';

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
    width: 200,
  },
  tilesHeading: {
    color: primaryColor,
    fontWeight: '500',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 20,
    zIndex: -1,
  },
  tilesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: 20,
    marginTop: 20,
  },
  popupWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: primaryColor,
    width: 250,
    padding: 10,
  },
  wrapperText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    width: 70,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
});

export default styles;
