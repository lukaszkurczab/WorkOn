import React from 'react';
import {
  TextInput as DefaultTextInput,
  View,
  StyleProp,
  ViewStyle,
  Text,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './TextInput.styles';

interface CustomTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  theme?: 'dark' | 'light';
  error?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  error,
  placeholder,
  style,
  textStyle,
  theme = 'dark',
  leftComponent,
  rightComponent,
  ...props
}) => {
  let inputWrapperStyle = styles.inputWrapper;

  if (error) {
    inputWrapperStyle = {
      ...inputWrapperStyle,
      backgroundColor: '#521616',
    };
  } else if (theme === 'light') {
    inputWrapperStyle = {
      ...inputWrapperStyle,
      backgroundColor: '#F2F2F2',
    };
  }

  return (
    <View style={[inputWrapperStyle, style]}>
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.container}>
        {leftComponent && <View style={styles.leftComponent}>{leftComponent}</View>}
        <DefaultTextInput
          style={[styles.input, textStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme === 'dark' ? '#848484' : '#343434'}
          {...props}
        />
        {rightComponent && <View style={styles.rightComponent}>{rightComponent}</View>}
      </View>
    </View>
  );
};
