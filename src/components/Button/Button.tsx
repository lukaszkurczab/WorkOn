import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = {
  variant?: 'contained' | 'text' | 'outlined';
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'contained', onPress, disabled = false, children }) => {
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
      style={[styles.button, getButtonStyle()]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
