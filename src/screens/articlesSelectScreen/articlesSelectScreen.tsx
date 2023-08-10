import React from 'react';
import { View, Text } from 'react-native';
import styles from './articlesSelectScreen.styles';
import Tile from '../../components/tiles/tile';

const ArticlesSelectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <View style={styles.tilesWrapper}>
        <Tile text='Calistenic' icon="articles_calisthenic.jpg" path="ArticlesListScreen" version='image'></Tile>
        <Tile text='Crossfit' icon="articles_crossFit.jpg" path="ArticlesListScreen" version='image'></Tile>
        <Tile text='Diet' icon="articles_diet.jpg" path="ArticlesListScreen" version='image'></Tile>
        <Tile text='Gym' icon="articles_gym.jpg" path="ArticlesListScreen" version='image'></Tile>
        <Tile text='Health' icon="articles_health.jpg" path="ArticlesListScreen" version='image'></Tile>
        <Tile text='Mindfullness' icon="articles_mindfullness.jpg" path="ArticlesListScreen" version='image'></Tile>
      </View>
    </View>
  );
};

export default ArticlesSelectScreen;