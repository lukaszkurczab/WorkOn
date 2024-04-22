import { StyleSheet } from 'react-native';
import { secondaryColor, primaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(16,16,16,.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: primaryColor,
    width: '80%',
    maxHeight: '60%',
    padding: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    padding: 0,
    fontSize: 16,
    height: 24,
    width: 40,
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  serieRow: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  seriesWrapper: {
    marginBottom: 5,
  },
  saveButton: {
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  saveText: {
    fontSize: 22,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  removeButton: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  removeIcon: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '500',
  },
});

export default styles;
