import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: backgroundColor,
  },
  articlesNavigation: {
    flexDirection: 'row',
    flexGrow: 0
  },
  navigationText: {
    color: primaryColor,
    fontSize: 18,
    paddingHorizontal: 10,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1,
    height: 35,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
    marginBottom: 20
  },
  atlasWrapper: {
    marginTop: 30,
    gap: 15,
    marginBottom: 100,
  },
});

export default styles;