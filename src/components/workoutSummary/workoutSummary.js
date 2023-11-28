import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { useFormatTime } from '../../utils/hooks';
import styles from './workoutSummary.styles';
import WorkoutSummaryListItem from "./workoutSummaryListItem/workoutSummaryListItem";
import ButtonBig from "../buttons/buttonBig/buttonBig";

const WorkoutSummary = () => {
  const navigation = useNavigation();
  const summary = useSelector((store) => store.trainingSummary.trainingSummary);
  const trainingName = useSelector((store) => store.trainingSummary.trainingName);
  const trainingTime = useSelector((store) => store.trainingSummary.trainingTime);
  const date = new Date().toLocaleDateString('pl-PL')

  const handleFinish = () => {
    navigation.navigate('MainScreen')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{trainingName} - summary </Text>
      <Text style={styles.time}>{date}</Text>
      <Text style={styles.listTitle}>Exercises:</Text>
      <View style={styles.listWrapper}>
        {summary.map((exercise) => (
          <WorkoutSummaryListItem exercise={exercise} key={exercise.id} />
        ))}
      </View>
      <Text style={styles.timeText}>Total time: {useFormatTime(trainingTime)}</Text>
      <ButtonBig additionalStyles={{alignSelf: 'center'}} theme={'light'} onClick={handleFinish}>
        <Text>FINISH</Text>
      </ButtonBig>
    </ScrollView>
  );
};

export default WorkoutSummary;