import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = {
  variant?: 'contained' | 'text' | 'outlined';
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<ButtonProps> = ({ variant = 'contained', style, onPress, disabled = false, children }) => {
  const getButtonStyle = () => {
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
  };

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
