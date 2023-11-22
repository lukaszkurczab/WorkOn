import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header/header';
import styles from './mainScreen.styles';
import Tile from '../../components/tiles/tile';
import BeginTrainingTile from '../../components/tiles/beginTrainingTile/beginTrainingTile';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <BeginTrainingTile />
      <Text style={styles.tilesHeading}>Choose your workout plan</Text>
      <View style={styles.tilesWrapper}>
        <Tile text='Your plans' icon="dumbbell" path="PlansListScreen" version='icon'></Tile>
        <Tile text='Exercise atlas' icon="list-ul" path="AtlasScreen" version='icon'></Tile>
        <Tile text='History' icon="chart-bar" path="MainScreen" version='icon'></Tile>
        <Tile text='Articles' icon="book" path="ArticlesSelectScreen" version='icon'></Tile>
      </View>
    </View>
  );
};

export default MainScreen;