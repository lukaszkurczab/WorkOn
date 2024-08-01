import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Typography } from '../Typography/Typography';
import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';
import { exercisesList, muscleGroupsList } from '../../assets/exercises/_exercise';
import styles from './ExerciseList.styles';
import { Exercise, ExerciseData } from '../../types/exercises';

interface ExerciseListProps {
  onItemPress: ({}: any) => void;
  selected?: Exercise[] | ExerciseData[];
}

const ExerciseList = ({ selected, onItemPress }: ExerciseListProps) => {
  const [visibleGroups, setVisibleGroups] = useState<{ [key: string]: boolean }>({});

  const toggleVisibility = (id: string) => {
    setVisibleGroups(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      {muscleGroupsList.map(muscle => (
        <View key={muscle}>
          <TouchableOpacity onPress={() => toggleVisibility(muscle)}>
            <Typography variant="h3" style={styles.header}>
              {muscle}
            </Typography>
          </TouchableOpacity>
          {visibleGroups[muscle] && (
            <View style={styles.list}>
              {exercisesList.map(exercise => {
                if (exercise.group.includes(muscle)) {
                  return (
                    <ExerciseListItem
                      onPress={onItemPress}
                      exercise={exercise}
                      key={exercise.id}
                      selected={selected !== undefined && selected.findIndex(item => item.id === exercise.id) !== -1}
                    />
                  );
                }
              })}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ExerciseList;
