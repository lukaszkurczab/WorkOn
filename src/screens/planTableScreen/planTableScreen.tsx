import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanTable from '../../components/planTable/planTable';
import styles from './planTableScreen.styles';

const PlanTableScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Your plans</Text>
      <Text style={styles.heading}>Gym plan</Text>
      <PlanTable/>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Icon name='plus' size={40} style={styles.icon} />
            <Text style={styles.button}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Icon name='plus' size={40} style={styles.icon} />
            <Text style={styles.button}>Remove</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default PlanTableScreen;