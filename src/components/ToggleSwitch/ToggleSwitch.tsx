import React from 'react';
import { View, Switch } from 'react-native';
import styles from './ToggleSwitch.styles';
import { blue, dark_gray, gray, primaryColor } from '../../styles/colors';

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch = ({ isOn, handleToggle }: ToggleSwitchProps) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: gray, true: primaryColor }}
        thumbColor={isOn ? blue : primaryColor}
        ios_backgroundColor={dark_gray}
        onValueChange={handleToggle}
        value={isOn}
        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
      />
    </View>
  );
};

export default ToggleSwitch;
