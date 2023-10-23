import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './repeatRow.styles'


const RepeatRow = ({reps, weight}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reps}>{reps} x {weight} kg</Text>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity>
          <Icon name='cancel' size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='check-circle' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RepeatRow;