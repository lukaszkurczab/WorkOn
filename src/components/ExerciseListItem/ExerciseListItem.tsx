import React, { useState } from 'react';
import { View } from 'react-native';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Typography } from '../Typography/Typography';
import styles from './ExerciseListItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { blue, primaryColor } from '../../styles/colors';
import { navigate } from '../../utility/navigate';
import { ExerciseData } from '../../types/exercises';

interface ExerciseListItemProps {
  exercise: ExerciseData;
  selected: boolean;
  onPress: ({}: any) => void;
}

const ExerciseListItem = ({ onPress, exercise, selected }: ExerciseListItemProps) => {
  const handlePreviewExercise = () => {
    navigate('ExerciseDetailsScreen', { exercise, showNavigation: false });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePreviewExercise()}>
        <View style={styles.iconButton}>
          <FontAwsome5Icon name="eye" size={14} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper} onPress={() => onPress(exercise)}>
        <Typography variant="h4" style={styles.text}>
          {exercise.name}
        </Typography>
        <FeatherIcon name="check" size={24} style={{ color: selected ? blue : primaryColor }} />
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseListItem;
