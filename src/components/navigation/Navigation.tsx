import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../utility/navigate';
import styles from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('MainScreen')}>
        <Icon name="home" style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('CalendarScreen')}>
        <Icon name="calendar" style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('UserSearchScreen')}>
        <Icon name="users" style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('ProfileScreen')}>
        <Icon name="user" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
