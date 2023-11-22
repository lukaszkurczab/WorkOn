import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './buttonBig.styles';

const ButtonBig = ({children, additionalStyles, theme, onClick}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[theme], additionalStyles]}
      onPress={() => onClick()}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBig;