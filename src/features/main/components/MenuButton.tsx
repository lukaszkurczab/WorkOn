import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { RootStackParamList, navigate } from '../../../utility/navigate';
import { Typography } from '../../../components/Typography/Typography';
import Button from '../../../components/Button/Button';

type MenuButtonProps = {
  text: string;
  screenToNavigate: keyof RootStackParamList;
  style?: StyleProp<ViewStyle>;
};

const MenuButton = ({ text, screenToNavigate, style = {} }: MenuButtonProps) => {
  return (
    <Button onPress={() => navigate(screenToNavigate)} style={style}>
      <Typography variant="h2">{text}</Typography>
    </Button>
  );
};

export default MenuButton;
