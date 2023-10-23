import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanBanner from '../../components/planBanner/planBanner';
import styles from './plansListScreen.styles';

const PlansListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your plans</Text>
      <View>
        <PlanBanner planName="Gym plan" img="test"/>
        <PlanBanner planName="Home" img="test"/>
      </View>
      <TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <Icon name='plus' size={45} style={styles.icon} />
          <Text style={styles.button}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlansListScreen;