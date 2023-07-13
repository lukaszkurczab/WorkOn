import React, { Children, ReactNode } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './buttonBig.styles';

interface Props {
  children: ReactNode
}

const ButtonBig = ({children}: Props) => {
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