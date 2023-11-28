import React from 'react';
import { View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './navigation.styles';

const Navigation = ({ children }) => {
  const navigation = useNavigation();

  return (
    <>
      {children}
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <Icon name="home" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {}}
        >
          <Icon name="bar-chart" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('CalendarScreen')}
        >
          <Icon name="calendar" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {}}
        >
          <Icon name="user" style={styles.buttonIcon} />
        </TouchableOpacity >
      </View>
    </>
  );
};

export default Navigation;