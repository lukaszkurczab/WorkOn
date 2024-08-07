import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './GroupContainer.styles';
import { Typography } from '../../../../components/Typography/Typography';
import { backgroundColor, blue, primaryColor } from '../../../../styles/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import { navigate } from '../../../../utility/navigate';
import { Exercise, ExerciseData } from '../../../../types/exercises';

type GroupContainerProps = {
  group: string;
  exercises: ExerciseData[];
  searchedText: string;
  selectedExercises: Exercise[];
  onSelect: (exercise: ExerciseData) => void;
};

const GroupContainer: React.FC<GroupContainerProps> = ({ group, exercises, selectedExercises, onSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handlePreviewExercise = (exercise: ExerciseData) => {
    navigate('ExerciseDetailsScreen', { exercise, showNavigation: false });
  };

  return (
    <View style={styles.groupWrapper}>
      <TouchableOpacity style={styles.groupTitle} onPress={handleToggle}>
        <Typography variant="h3">{group}</Typography>
      </TouchableOpacity>
      {!isCollapsed && (
        <View style={styles.exercisesWrapper}>
          {exercises.map((exercise, index) => (
            <View style={{ flexDirection: 'row' }} key={exercise.id}>
              <TouchableOpacity style={styles.iconButton} onPress={() => handlePreviewExercise(exercise)}>
                <FontAwsome5Icon name="eye" size={14} />
              </TouchableOpacity>
              <TouchableOpacity key={index} style={styles.exercise} onPress={() => onSelect(exercise)}>
                <Typography variant="h4" style={{ color: backgroundColor }}>
                  {exercise.name}
                </Typography>
                <FeatherIcon
                  name="check"
                  size={24}
                  style={{
                    color: selectedExercises.findIndex(item => item.id === exercise.id) !== -1 ? blue : primaryColor,
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default GroupContainer;
