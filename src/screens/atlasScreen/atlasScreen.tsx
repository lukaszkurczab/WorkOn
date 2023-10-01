import React from 'react';
import { View, Text } from 'react-native';
import styles from './atlasScreen.styles';
import ExerciseTile from '../../components/tiles/exerciseTile/exerciseTile';
import AtlasDropdown from '../../components/atlasDropdown/atlasDropdown';
import { store } from '../../store/store';

const AtlasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise atlas</Text>
      <AtlasDropdown/>
      <View style={styles.articlesWrapper}>
        <ExerciseTile/>
      </View>
    </View>
  );
};

export default AtlasScreen;