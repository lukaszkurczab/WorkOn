import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './atlasDropdown.styles';

interface DataProps {
  key: string,
  name: string
}

const data: DataProps[] = [
  {key:'1', name:'Back'},
  {key:'2', name:'Chest'}
]

const AtlasDropdown = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<DataProps>(data[0]);

  const openMenu = () => setVisible(!visible);
  const closeMenu = () => setVisible(false);

  const handleMenuItemSelect = (item: DataProps) => {
    setSelectedPlan(item);
    closeMenu();
  };

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
