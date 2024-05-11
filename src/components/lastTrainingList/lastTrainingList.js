import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './lastTrainingList.styles';
import LastTrainingListItem from './lastTrainingListItem/lastTrainingListItem';

const LastTrainingList = historyData => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Recent trainings</Text>
        <View>
          {historyData.data.map((day, index) => (
            <LastTrainingListItem day={day} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LastTrainingList;
