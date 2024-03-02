import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SET_SELECTED_GROUP } from "../../store/reducers/exerciseReducer";
import styles from './atlasDropdown.styles';

const data = [
  {key: '1', name:'Back'},
  {key: '2', name: 'Chest'},
  {key: '3', name: "Triceps"},
  {key: '4', name: "Biceps"},
  {key: '5', name: "Forearms"},
  {key: '6', name: "Stomach"},
  {key: '7', name: "Thigh"},
  {key: '8', name: "Calves"},
  {key: '9', name: "Shoulders"},
  {key: '10', name: "Trapezius"},
  {key: '11', name: "Neck"},
  {key: '12', name: "Abs"},
  {key: '13', name: "Legs"}
]

const AtlasDropdown = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(data[0]);

  const openMenu = () => setVisible(!visible);

  const handleMenuItemSelect = (item) => {
    setSelectedPlan(item)
    dispatch(SET_SELECTED_GROUP({
      group: item.name.toLowerCase(),
    }))
    setVisible(false)
  }

  return (
      <View style={styles.dropdownWrapper}>
        <TouchableOpacity onPress={openMenu}>
        <View style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selectedPlan.name}</Text>
          <Icon style={styles.dropdownButtonIcon} name="chevron-down" size={24} />
        </View>
        </TouchableOpacity>
        <View style={visible ? styles.itemsWrapper : styles.itemsWrapper__hidden}>
          {data.map((item) => (
            <TouchableOpacity onPress={() => handleMenuItemSelect(item)} key={item.key}>
              <Text style={styles.dropdownItem}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
  );
};

export default AtlasDropdown;
