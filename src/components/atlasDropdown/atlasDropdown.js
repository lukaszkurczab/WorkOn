import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SET_SELECTED_GROUP } from '../../store/reducers/atlasReducer';
import styles from './atlasDropdown.styles';

const data = [
  'Back',
  'Biceps',
  'Calves',
  'Chest',
  'Forearms',
  'Glutes',
  'Hamstrings',
  'Legs',
  'Lower back',
  'Quadriceps',
  'Shoulders',
  'Triceps',
  'Upper back',
];

const AtlasDropdown = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const selecterMusclesGroup = useSelector(store => store.atlas.selectedGroup);

  const openMenu = () => setVisible(!visible);

  const handleMenuItemSelect = item => {
    dispatch(SET_SELECTED_GROUP(item.toLowerCase()));
    setVisible(false);
  };

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity onPress={openMenu}>
        <View style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selecterMusclesGroup.charAt(0).toUpperCase() + selecterMusclesGroup.slice(1)}</Text>
          <Icon style={styles.dropdownButtonIcon} name='chevron-down' size={24} />
        </View>
      </TouchableOpacity>
      <View style={visible ? styles.itemsWrapper : styles.itemsWrapper__hidden}>
        {data.map(item => (
          <TouchableOpacity onPress={() => handleMenuItemSelect(item)} key={item}>
            <Text style={styles.dropdownItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AtlasDropdown;
