import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './ExerciseListItem.styles';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { red } from '../../../../styles/colors';
import { navigate } from '../../../../utility/navigate';
import { useGetExerciseData } from '../../../../utility/hooks';
import { Exercise } from '../../../../types/exercises';

type PlanCarouselItemProps = {
  exercise: Exercise;
  index: number;
  handleUnselectExercise: (exerciseId: string) => void;
  handleSelectEditExercise: (index: number) => void;
};

const PlanCarouselItem = ({
  exercise,
  index,
  handleUnselectExercise,
  handleSelectEditExercise,
}: PlanCarouselItemProps) => {
  const exerciseData = useGetExerciseData(exercise.id);

  const handlePreviewExercise = () => {
    navigate('ExerciseDetailsScreen', { exercise: exerciseData, showNavigation: false });
  };

  return (
    <View key={exercise.id} style={styles.selectedExerciseItem}>
      <TouchableOpacity onPress={() => handlePreviewExercise()} style={styles.viewIcon}>
        <FontAwsome5Icon name="eye" size={14} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectEditExercise(index)} style={{ width: '80%' }}>
        <Typography variant="h4" style={[styles.text, { alignSelf: 'flex-start' }]}>
          {exerciseData.name}
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleUnselectExercise(exercise.id)} style={styles.viewIcon}>
        <FontAwesomeIcon name="trash" size={20} style={{ color: red }} />
      </TouchableOpacity>
    </View>
  );
};

export default PlanCarouselItem;
