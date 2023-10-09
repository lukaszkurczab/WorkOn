import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { View, Text } from 'react-native';
import styles from './atlasScreen.styles';
import ExerciseTile from '../../components/tiles/exerciseTile/exerciseTile';
import AtlasDropdown from '../../components/atlasDropdown/atlasDropdown';
import { Exercise } from '../../types/exercise';

const AtlasScreen = () => {
  const { exercises } = useSelector((store: RootState) => store.exercises);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise atlas</Text>
      <AtlasDropdown/>
      <View style={styles.articlesWrapper}>
        {exercises.map((exercise: Exercise) => (
          <ExerciseTile {...exercise} />
        ))}
      </View>
    </View>
  );
};

export default AtlasScreen;