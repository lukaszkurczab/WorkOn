import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './beginTrainingDropdown.styles';
import {
  SET_SELECTED_PLAN
} from "../../../../store/reducers/planReducer"

const BeginTrainingDropdown = ({selectedPlan}) => {
  const dispatch = useDispatch();
  const plans = useSelector((store) => store.plans.plans)
  const [visible, setVisible] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("")

  useEffect(() => {
    setSelectedPlanName(selectedPlan)
  }, [selectedPlan]);

  const handleMenuItemSelect = (plan) => {
    dispatch(SET_SELECTED_PLAN(plan))
    setVisible(false);
  };

  return (
      <View style={styles.dropdownWrapper}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>{selectedPlanName}</Text>
            <Icon style={styles.dropdownButtonIcon} name="chevron-down" size={24} />
          </View>
        </TouchableOpacity>
      <View style={visible ? styles.itemsWrapper : styles.itemsWrapper__hidden}>
        {
          plans.map(plan => (
            <TouchableOpacity onPress={() => handleMenuItemSelect(plan)} key={plan.id}>
              <Text style={styles.dropdownItem}>{plan.name}</Text>
            </TouchableOpacity>
          ))
        }
        </View>
      </View>
  );
};

export default BeginTrainingDropdown;
