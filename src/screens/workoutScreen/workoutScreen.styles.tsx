import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    zIndex: -1
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
  articlesWrapper: {
    marginTop: 30,
    gap: 15,
  },
});

export default styles;