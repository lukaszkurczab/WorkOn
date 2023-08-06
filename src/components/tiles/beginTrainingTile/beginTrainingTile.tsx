import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './beginTrainingTile.styles';
import BeginTrainingDropdown from './beginTrainingDropdown/beginTrainingDropdown';

const BeginTrainingTile = () => {
  const [selected, setSelected] = React.useState("");

  return(
  <View style={styles.container}>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Begin training</Text>
      <BeginTrainingDropdown />
    </View>
    <View style={styles.iconWrapper}>
      <Icon name='play' size={45} style={styles.icon} />
    </View>
  </View>
  )
};

export default BeginTrainingTile;