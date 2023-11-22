import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './repeatRow.styles'


const RepeatRow = ({ reps, weight, onFinish, index, status, finishedWithSuccess }) => {
  const [iconsComponent, setIconsComponent] = useState(<></>)

  useEffect(() => {
    switch(status) {
      case 'onTrack':
        setIconsComponent(
          <>
            <TouchableOpacity onPress={() => onFinish(index, reps, weight, false)}>
              <Icon name='cancel' size={30} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onFinish(index, reps, weight, true)}>
              <Icon name='check-circle' size={30} style={styles.icon} />
            </TouchableOpacity>
          </>
        )
        break;
      case 'inQueue':
        setIconsComponent(
          <>
            <View>
              <Icon name='cancel' size={30} style={styles.disabledIcon} />
            </View>
            <View>
              <Icon name='check-circle' size={30} style={styles.disabledIcon} />
            </View>
          </>
        )
        break;
      default:
        setIconsComponent(
          <View style={styles.finishWrapper}>
            <Text style={styles.finishText}>Finished</Text>
            {
              finishedWithSuccess ? (
                <Icon name='check-circle' size={30} style={styles.disabledIcon} />  
              ): (
                <Icon name='cancel' size={30} style={styles.disabledIcon} />
              )
            }
          </View>
        )
        break;
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