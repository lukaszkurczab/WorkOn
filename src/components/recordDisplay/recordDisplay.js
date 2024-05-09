import React from 'react';
import { View, Text } from 'react-native';
import styles from './recordDisplay.styles';

const RecordDisplay = ({ records }) => {
  return (
    <View style={styles.container}>
      <View style={styles.recordContainer}>
        {records.map(record => (
          <View key={record.exercise} style={styles.record}>
            <Text style={styles.recordTitle}>{record.exercise}</Text>
            <Text style={styles.recordValue}>{record.weight} kg</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecordDisplay;
