import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './tile.styles';

interface Props {
  text: string,
  icon: string,
  path: string
}


const Tile = ({ text, icon, path }: Props) => {
  return(
    <TouchableOpacity style={styles.container}>
      <Icon name={icon} size={45} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

export default Tile;