import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 30,
  },
  head: {  
    height: 40,
  },
  wrapper: { 
    flexDirection: 'row',
  },
  row: {  
    height: 28  
  },
  headText: { 
    textAlign: 'center',
    color: primaryColor, 
    fontSize: 18
  },
  rowText: { 
    textAlign: 'center',
    color: primaryColor, 
    fontSize: 14
  }
});

export default styles;