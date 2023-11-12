import React from 'react';
import { useSelector } from "react-redux";
import { View, Text, ScrollView } from 'react-native';
import styles from './atlasScreen.styles';
import ExerciseTile from '../../components/tiles/exerciseTile/exerciseTile';
import AtlasDropdown from '../../components/atlasDropdown/atlasDropdown';

const AtlasScreen = () => {
  const { exercises } = useSelector((store) => store.exercises);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercise atlas</Text>
      <AtlasDropdown/>
      <View style={styles.atlasWrapper}>
        {exercises.map((exercise) => (
          <ExerciseTile exercise={exercise} key={exercise.id}/>
        ))}
      </View>
    </ScrollView>
  );
};

export default AtlasScreen;