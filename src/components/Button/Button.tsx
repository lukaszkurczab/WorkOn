import React, { ReactNode, useCallback } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = {
  variant?: 'contained' | 'text' | 'outlined';
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ variant = 'contained', style, onPress, disabled = false, children }: ButtonProps) => {
  const getButtonStyle = useCallback(() => {
    switch (variant) {
      case 'contained':
        return disabled ? styles.containedButtonDisabled : styles.containedButton;
      case 'text':
        return disabled ? styles.textButtonDisabled : styles.textButton;
      case 'outlined':
        return disabled ? styles.outlinedButtonDisabled : styles.outlinedButton;
      default:
        return disabled ? styles.containedButtonDisabled : styles.containedButton;
    }
  }, [variant, disabled]);

  return (
    <TouchableOpacity
      style={[getButtonStyle(), styles.button, style]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
