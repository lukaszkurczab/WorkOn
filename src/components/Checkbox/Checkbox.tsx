import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Checkbox.styles';

interface CheckboxProps {
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps> = ({ selected, onClick, children, style }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onClick}>
      <View style={styles.iconWrapper}>
        {selected && (
          <Text>
            <Icon name="check" size={14} style={styles.icon} />
          </Text>
        )}
      </View>
      {children}
    </TouchableOpacity>
  );
};

export default Checkbox;
