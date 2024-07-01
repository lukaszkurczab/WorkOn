import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Typography } from '../Typography/Typography';
import styles from './ExerciseListItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { blue, primaryColor } from '../../styles/colors';
import { useGetExerciseData } from '../../utility/hooks';
import { navigate } from '../../utility/navigate';

interface ExerciseListItemProps {
  name: string;
  exerciseId: string;
  dayId: string;
  onSelect: ({ dayId, exerciseId, name }: { dayId: string; exerciseId: string; name: string }) => void;
}

const ExerciseListItem = ({ name, onSelect, exerciseId, dayId }: ExerciseListItemProps) => {
  const selectedExercises = useSelector(
    (state: RootState) => state.planCreator.newPlan.days.find(day => day.id === dayId)?.exercises
  );
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedExercises) {
      const isSelected = selectedExercises.some(exercise => exercise.id === exerciseId);
      setSelected(isSelected);
    }
  }, [selectedExercises, exerciseId]);

  const handleSelect = () => {
    setSelected(!selected);
    onSelect({ dayId, exerciseId, name });
  };

  const handlePreviewExercise = (id: string) => {
    const exercise = useGetExerciseData(id);
    navigate('ExerciseDetailsScreen', { exercise, showNavigation: false });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePreviewExercise(exerciseId)}>
        <View style={styles.iconButton}>
          <FontAwsome5Icon name="eye" size={14} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper} onPress={handleSelect}>
        <Typography variant="h4" style={styles.text}>
          {name}
        </Typography>
        <FeatherIcon name="check" size={24} style={{ color: selected ? blue : primaryColor }} />
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseListItem;
