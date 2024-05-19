import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './lastTrainingList.styles';
import LastTrainingListItem from './lastTrainingListItem/lastTrainingListItem';

const LastTrainingList = historyData => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recent trainings</Text>
      <View>
        {historyData.data.map(item => (
          <LastTrainingListItem item={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default LastTrainingList;
