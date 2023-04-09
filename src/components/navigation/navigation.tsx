import React, { ReactNode } from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './navigation.styles';

interface Props {
  children: ReactNode
}

const Navigation = ({ children }: Props) => {
  return (
    <>
      {children}
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => console.log('Button 1 pressed')}
        >
          <Icon name="question-circle" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => console.log('Button 1 pressed')}
        >
          <Icon name="bar-chart" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => console.log('Button 1 pressed')}
        >
          <Icon name="calendar" style={styles.buttonIcon} />
        </TouchableOpacity >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => console.log('Button 1 pressed')}
        >
          <Icon name="user" style={styles.buttonIcon} />
        </TouchableOpacity >
      </View>
    </>
  );
};

export default Navigation;