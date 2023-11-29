import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { useGetPlan } from '../../../utils/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './beginTrainingTile.styles';
import SelectTrainingDropdown from './selectTrainingDropdown/selectTrainingDropdown';
import SelectDayDropdown from './selectDayDropdown/selectDayDropdown';
import {
  START_TRAINING
} from "../../../store/reducers/trainingReducer"

const BeginTrainingTile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedPlan = useSelector((store) => store.plans.selectedPlan)
  const [selectedDay, setSelectedDay] = useState(0)

  const handleDaySelected = (dayIndex) => {
    setSelectedDay(dayIndex)
  };

  const handleStartPress = () => {
    const newTraining = useGetPlan(selectedPlan.id)

    dispatch(START_TRAINING({
      plan: newTraining.days[selectedDay].exercises,
      planName: newTraining.name
    }))
    navigation.navigate('WorkoutScreen');
  };

  return(
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Begin training</Text>
      <SelectTrainingDropdown selectedPlan={selectedPlan.name} handleDaySelectedReset={handleDaySelected} />
      <SelectDayDropdown days={selectedPlan.days} handleSelectDay={handleDaySelected} selectedDayIndex={selectedDay} />
    </View>
    <TouchableOpacity style={styles.iconWrapper} onPress={handleStartPress}>
      <Icon name='play' size={45} style={styles.icon} />
    </TouchableOpacity>
  </View>
  )
};

export default BeginTrainingTile;