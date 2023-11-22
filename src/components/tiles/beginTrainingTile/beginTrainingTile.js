import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { useGetPlan } from '../../../utils/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './beginTrainingTile.styles';
import BeginTrainingDropdown from './beginTrainingDropdown/beginTrainingDropdown';
import {
  START_TRAINING
} from "../../../store/reducers/trainingReducer"

const BeginTrainingTile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedPlan = useSelector((store) => store.plans.selectedPlan)

  const handleStartPress = () => {
    const newTraining = useGetPlan(selectedPlan.id)

    dispatch(START_TRAINING({
      plan: newTraining.days[0].exercises,
      planName: newTraining.name
    }))
    navigation.navigate('WorkoutScreen');
  };

  return(
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Begin training</Text>
        <BeginTrainingDropdown selectedPlan={selectedPlan.name} />
    </View>
    <TouchableOpacity style={styles.iconWrapper} onPress={handleStartPress}>
      <Icon name='play' size={45} style={styles.icon} />
    </TouchableOpacity>
  </View>
  )
};

export default BeginTrainingTile;