import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography/Typography';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/work.png')} style={styles.image} />
      <Typography variant="h1">WorkOn</Typography>
    </View>
  );
};

export default Header;
