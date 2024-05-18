import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './button.styles';

const Button = ({ isLoading, disabled, onPress, text }) => {
  return (
    <TouchableOpacity style={[styles.button, (isLoading || disabled) && styles.disabledButton]} onPress={onPress} disabled={isLoading}>
      {isLoading ? <ActivityIndicator color='#06f' /> : <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
