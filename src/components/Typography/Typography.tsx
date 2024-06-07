import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import styles from './Typography.styles';

interface TypographyProps extends TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: StyleProp<TextStyle>;
}

export const Typography: React.FC<TypographyProps> = ({ variant, style, ...props }) => {
  return <Text style={[styles[variant], style]} {...props} />;
};
