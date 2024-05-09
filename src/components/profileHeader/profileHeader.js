import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './profileHeader.styles';

const ProfileHeader = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Icon name='user-circle' size={110} style={styles.icon}></Icon>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ProfileHeader;
