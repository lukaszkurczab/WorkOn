import React from 'react';
import { TextInput as DefaultTextInput, View, TextInputProps } from 'react-native';
import styles from './TextInput.styles';
import { Typography } from '../Typography/Typography';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  error?: string;
  variant?: 'default' | 'withEdit' | 'error';
}

export const TextInput: React.FC<CustomTextInputProps> = ({ label, error, variant = 'default', style, ...props }) => {
  let inputStyle = styles.input;

  if (variant === 'withEdit') {
    inputStyle = styles.inputWithEdit;
  } else if (variant === 'error') {
    inputStyle = styles.inputError;
  }

  return (
    <View style={styles.inputWrapper}>
      {label && (
        <Typography variant="h3" style={styles.inputLabel}>
          {label}
        </Typography>
      )}
      <DefaultTextInput style={[inputStyle, style]} {...props} />
      {variant === 'withEdit' && (
        <Typography variant="h3" style={styles.editIcon}>
          ✏️
        </Typography>
      )}
      {error && (
        <Typography variant="h3" style={styles.errorText}>
          {error}
        </Typography>
      )}
    </View>
  );
};
