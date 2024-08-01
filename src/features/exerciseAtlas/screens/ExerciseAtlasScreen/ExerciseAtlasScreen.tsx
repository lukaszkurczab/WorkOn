import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './ExerciseAtlasScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { muscleGroupsList } from '../../../../assets/exercises/_exercise';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { newExercisesList } from '../../../../assets/exercises/_exercise';

const ExerciseAtlasScreen = () => {
  const [searchedText, setSearchedText] = useState('');

  const filteredExercises = newExercisesList.filter(exercise =>
    exercise.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput value={searchedText} placeholder="Search" onChangeText={setSearchedText} style={styles.input} />
          <View style={styles.atlasWrapper}>
            {muscleGroupsList.map(group => {
              const exercisesForGroup = filteredExercises.filter(exercise => exercise.group.includes(group));

              if (exercisesForGroup.length === 0) return null;

              return (
                <GroupContainer key={group} group={group} exercises={exercisesForGroup} searchedText={searchedText} />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ExerciseAtlasScreen;
