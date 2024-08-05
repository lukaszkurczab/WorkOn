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
import { gray, dark_gray, light_red } from '../../styles/colors';

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

const getInputWrapperStyle = (error: string | undefined, theme: 'dark' | 'light') => {
  let backgroundColor;
  let borderColor;
  let borderWidth;

  if (error) {
    borderColor = light_red;
    borderWidth = 1;
  }
  if (theme === 'light') {
    backgroundColor = gray;
  } else {
    backgroundColor = dark_gray;
  }
  return {
    ...styles.inputWrapper,
    backgroundColor,
    borderColor,
    borderWidth,
  };
};

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
  return (
    <View>
      <View style={[getInputWrapperStyle(error, theme), style, styles.container]}>
        {leftComponent && <View style={styles.leftComponent}>{leftComponent}</View>}
        <DefaultTextInput
          style={[styles.input, textStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme === 'dark' ? gray : dark_gray}
          {...props}
        />
        {rightComponent && <View style={styles.rightComponent}>{rightComponent}</View>}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
