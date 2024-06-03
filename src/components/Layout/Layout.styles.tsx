import { StyleSheet, StatusBar, Platform } from 'react-native';
import { backgroundColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 36,
    width: '100%',
    flex: 1,
    paddingBottom: 61,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 8 : 8,
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  scrollView: {
    minHeight: '100%',
    justifyContent: 'center',
  },
  keyboardAvoidingView: {
    width: '100%',
  },
});

export default styles;
