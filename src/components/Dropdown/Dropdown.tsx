import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Dropdown.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Typography } from '../Typography/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DropdownProps<T> {
  label: string;
  data: Array<T>;
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
}

const Dropdown = <T extends unknown>({ label, data, onSelect, renderItem }: DropdownProps<T>) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<T | null>(null);

  const handleSelect = (item: T) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.dropdown}>
        <Typography variant="h3" style={styles.dropdownText}>
          {selected ? renderItem(selected) : label}
        </Typography>
        {visible ? (
          <Icon name="chevron-up" size={20} style={styles.chevron} />
        ) : (
          <Icon name="chevron-down" size={20} style={styles.chevron} />
        )}
      </TouchableOpacity>
      {visible && (
        <View style={styles.listContainer}>
          <ScrollView>
            {data.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelect(item)} style={styles.item}>
                {renderItem(item)}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
