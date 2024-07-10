import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { RootStackParamList, navigate } from '../../../utility/navigate';
import styles from './MenuButton.styles';
import { Typography } from '../../../components/Typography/Typography';

type MenuButtonProps = {
  text: string;
  screenToNavigate: keyof RootStackParamList;
  style?: StyleProp<ViewStyle>;
};

const MenuButton = ({ text, screenToNavigate, style = {} }: MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={() => navigate(screenToNavigate)} style={[styles.button, style]}>
      <Typography variant="h2" style={styles.buttonText}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default MenuButton;
