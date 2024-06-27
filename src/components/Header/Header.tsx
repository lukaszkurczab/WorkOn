import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography/Typography';
import styles from './Header.styles';

interface HeaderProps {
  hideImage?: boolean;
  text?: string;
}

const Header = ({ hideImage = false, text = 'WorkOn' }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {!hideImage && <Image source={require('../../assets/work.png')} style={styles.image} />}
      <Typography variant="h1">{text}</Typography>
    </View>
  );
};

export default Header;
