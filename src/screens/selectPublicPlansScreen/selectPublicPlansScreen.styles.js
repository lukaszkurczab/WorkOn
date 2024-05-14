import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, secondaryColor, fillColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingBottom: 60,
  },
  header: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  settingsIcon: {
    color: primaryColor,
  },
  card: {
    backgroundColor: fillColor,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    flexShrink: 1,
  },
  image: {
    width: 100,
    height: 80,
  },
  info: {
    padding: 10,
    flex: 1,
  },
  type: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  publicButtonWrapper: {
    width: 50,
    marginTop: 35,
  },
  confirmButton: {
    alignSelf: 'center',
    borderColor: secondaryColor,
    backgroundColor: primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginVertical: 20,
  },
  tileWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  confirmText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
