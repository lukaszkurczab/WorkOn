import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './ExerciseAtlasScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { exercisesList } from '../../../../assets/exercises/_exercise';
import GroupContainer from '../../components/GroupContainer/GroupContainer';

const ExerciseAtlasScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.atlasWrapper}>
            {exercisesList.map(group => (
              <GroupContainer group={group} key={group.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ExerciseAtlasScreen;
