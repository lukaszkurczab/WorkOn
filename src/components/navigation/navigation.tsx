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
        <TouchableOpacity >
          <Icon name="question-circle" style={styles.button} />
        </TouchableOpacity >
        <TouchableOpacity >
          <Icon name="bar-chart" style={styles.button} />
        </TouchableOpacity >
        <TouchableOpacity >
          <Icon name="calendar" style={styles.button} />
        </TouchableOpacity >
        <TouchableOpacity >
          <Icon name="user" style={styles.button} />
        </TouchableOpacity >
      </View>
    </>
  );
};

export default Navigation;