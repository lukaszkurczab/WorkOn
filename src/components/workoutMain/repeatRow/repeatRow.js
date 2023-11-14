import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './repeatRow.styles'


const RepeatRow = ({ reps, weight, onSuccess, onFail, index, status }) => {
  const [iconsComponent, setIconsComponent] = useState(<></>)

  useEffect(() => {
    if(status === 'onTrack') {
        setIconsComponent(
          <>
            <TouchableOpacity onPress={() => onFail(index, reps, weight)}>
              <Icon name='cancel' size={30} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSuccess()}>
              <Icon name='check-circle' size={30} style={styles.icon} />
            </TouchableOpacity>
          </>
        )
    } else {
      setIconsComponent(
        <Text>Finished</Text>
      )
    }
  }, [status])
    

  return (
    <View style={styles.container}>
      <Text style={styles.reps}>{reps} x {weight} kg</Text>
      <View style={styles.iconsWrapper}>
        {iconsComponent}
      </View>
    </View>
  );
};

export default RepeatRow;