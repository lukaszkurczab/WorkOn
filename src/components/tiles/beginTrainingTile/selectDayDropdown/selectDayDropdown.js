import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './selectDayDropdown.styles';

const SelectDayDropdown = ({ days, handleSelectDay, selectedDayIndex }) => {
  const [visible, setVisible] = useState(false);

  const handleOnSelectDay = (index) => {
    handleSelectDay(index),
    setVisible(false)
  }

  return (
      <View style={styles.dropdownWrapper}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>{days[selectedDayIndex].name}</Text>
            <Icon style={styles.dropdownButtonIcon} name="chevron-down" size={24} />
          </View>
        </TouchableOpacity>
      <View style={visible ? styles.itemsWrapper : styles.itemsWrapper__hidden}>
        {
          days.map((day, index) => !day.restDay ? (
            <TouchableOpacity onPress={() => handleOnSelectDay(index)} key={day.name + index}>
              <Text style={styles.dropdownItem}>{day.name}</Text>
            </TouchableOpacity>
          ) : null
        )
        }
        </View>
      </View>
  );
};

export default SelectDayDropdown;
