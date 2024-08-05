import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './ExercisesGroupContainer.styles';
import { Typography } from '../../../../components/Typography/Typography';
import { backgroundColor } from '../../../../styles/colors';
import { navigate } from '../../../../utility/navigate';
import { ExerciseData } from '../../../../types/exercises';

type ExercisesGroupContainerProps = {
  group: string;
  exercises: ExerciseData[];
  searchedText: string;
};

const ExercisesGroupContainer: React.FC<ExercisesGroupContainerProps> = ({ group, exercises, searchedText }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.groupWrapper}>
      <TouchableOpacity style={styles.groupTitle} onPress={handleToggle}>
        <Typography variant="h3">{group}</Typography>
      </TouchableOpacity>
      {!isCollapsed && (
        <View style={styles.exercisesWrapper}>
          {exercises.map((exercise, index) => (
            <TouchableOpacity
              key={index}
              style={styles.exercise}
              onPress={() => navigate('ExerciseDetailsScreen', { exercise })}
            >
              <Typography variant="h4" style={{ color: backgroundColor }}>
                {exercise.name}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default ExercisesGroupContainer;
