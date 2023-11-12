import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './menuButton.styles';

const MenuButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => onClick()}
    >
      <View style={styles.dot}/>
      <View style={styles.dot}/>
      <View style={styles.dot}/>
    </TouchableOpacity>
  );
};

export default MenuButton;