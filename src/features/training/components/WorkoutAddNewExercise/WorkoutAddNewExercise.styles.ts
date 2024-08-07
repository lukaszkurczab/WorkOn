import { StyleSheet } from 'react-native';
import { primaryColor, blue, backgroundColor } from '../../../../styles/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    borderColor: blue,
    backgroundColor: primaryColor,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    width: 220,
    alignSelf: 'center',
  },
  atlasWrapper: {
    gap: 16,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  textInput: {
    width: 45,
    textAlign: 'center',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    color: backgroundColor,
    backgroundColor: primaryColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  serie: {
    gap: 8,
    marginBottom: 16,
  },
  editContainer: {
    alignItems: 'center',
    width: '100%',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
});

export default styles;
