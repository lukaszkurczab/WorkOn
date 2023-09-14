import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './beginTrainingTile.styles';
import BeginTrainingDropdown from './beginTrainingDropdown/beginTrainingDropdown';

const BeginTrainingTile = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate('WorkoutScreen' as never);
  };

  return(
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Begin training</Text>
      <BeginTrainingDropdown />
    </View>
    <TouchableOpacity style={styles.iconWrapper} onPress={handleStartPress}>
      <Icon name='play' size={45} style={styles.icon} />
    </TouchableOpacity>
  </View>
  )
};

export default BeginTrainingTile;