import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Typography } from '../Typography/Typography';
import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';
import { exercisesList } from '../../assets/exercises/_exercise';
import styles from './ExerciseList.styles';

interface ExerciseListProps {
  dayId: string;
  onSelect: ({ dayId, exerciseId, name }: { dayId: string; exerciseId: string; name: string }) => void;
}

const ExerciseList = ({ dayId, onSelect }: ExerciseListProps) => {
  const [visibleGroups, setVisibleGroups] = useState<{ [key: string]: boolean }>({});

  const toggleVisibility = (id: string) => {
    setVisibleGroups(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      {exercisesList.map(exerciseGroup => (
        <View key={exerciseGroup.id}>
          <TouchableOpacity onPress={() => toggleVisibility(exerciseGroup.id)}>
            <Typography variant="h3" style={styles.header}>
              {exerciseGroup.name}
            </Typography>
          </TouchableOpacity>
          {visibleGroups[exerciseGroup.id] && (
            <View style={styles.list}>
              {exerciseGroup.exercises.map(exercise => (
                <ExerciseListItem
                  onSelect={onSelect}
                  name={exercise.name}
                  exerciseId={exercise.id}
                  dayId={dayId}
                  key={exercise.id}
                />
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ExerciseList;
