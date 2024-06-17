import { StyleSheet, StatusBar, Platform } from 'react-native';
import { backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: backgroundColor,
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 8 : 8,
  },
  scrollView: {
    justifyContent: 'center',
    width: '100%',
  },
  keyboardAvoidingView: {
    width: '100%',
    flex: 1,
  },
});

export default styles;
