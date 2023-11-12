import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './buttonBig.styles';

const ButtonBig = ({children}) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => console.log('Button 1 pressed')}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBig;