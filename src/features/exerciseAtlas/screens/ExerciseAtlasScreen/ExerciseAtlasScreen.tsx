import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './ExerciseAtlasScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { exercisesList } from '../../../../assets/exercises/_exercise';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import { TextInput } from '../../../../components/TextInput/TextInput';

const ExerciseAtlasScreen = () => {
  const [searchedText, setSearchedText] = useState('');

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput value={searchedText} placeholder="Search" onChangeText={setSearchedText} style={styles.input} />
          <View style={styles.atlasWrapper}>
            {exercisesList.map(group => (
              <GroupContainer group={group} key={group.id} searchedText={searchedText} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ExerciseAtlasScreen;
