import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './SelectedExercisesSection.styles';
import { Day } from '../../../../types/plans';
import { red } from '../../../../styles/colors';
import { Exercise } from '../../../../types/exercises';
import { navigate } from '../../../../utility/navigate';
import { useDispatch, useGetExerciseData } from '../../../../utility/hooks';
import { CHANGE_EXERCISES_ORDER, UNSELECT_EXERCISE } from '../../store/slice/slice';
import { DraggableList } from '../../../../components/DraggableList/DraggableList';
import Button from '../../../../components/Button/Button';

type SelectedExercisesSectionProps = {
  day: Day;
  exercises: Exercise[];
  handleSetStep: (newStep: number) => void;
  handleSelectExerciseToEdit: (index: number) => void;
  handleSetIndex: (newIndex: 'prev' | 'next') => void;
};

const SelectedExercisesSection = ({
  handleSetStep,
  handleSelectExerciseToEdit,
  day,
  exercises,
  handleSetIndex,
}: SelectedExercisesSectionProps) => {
  const dispatch = useDispatch();

  const handlePreviewExercise = (exercise: Exercise) => {
    const exerciseData = useGetExerciseData(exercise.id);
    navigate('ExerciseDetailsScreen', { exercise: exerciseData, showNavigation: false });
  };

  const handleRemoveExercise = (exerciseId: string) => {
    dispatch(UNSELECT_EXERCISE({ dayId: day.id, exerciseId: exerciseId }));
  };

  const handleEditExercise = (index: number) => {
    handleSelectExerciseToEdit(index);
    handleSetStep(2);
  };

  const handleDragEnd = (newData: Exercise[]) => {
    dispatch(CHANGE_EXERCISES_ORDER({ dayId: day.id, newOrder: newData }));
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 16 }}>
        <Button variant="text" onPress={() => handleSetIndex('prev')} style={{ width: 32 }}>
          <FontAwesomeIcon name="chevron-left" size={14} />
        </Button>
        <Typography variant="h2" style={styles.text}>
          {day.name}
        </Typography>
        <Button variant="text" onPress={() => handleSetIndex('next')} style={{ width: 32 }}>
          <FontAwesomeIcon name="chevron-right" size={14} />
        </Button>
      </View>
      <ScrollView style={{ width: '100%' }}>
        <DraggableList
          data={exercises}
          onDragEnd={handleDragEnd}
          renderItem={(exercise, index) => (
            <View key={exercise.id} style={styles.selectedExerciseItem}>
              <TouchableOpacity onPress={() => handlePreviewExercise(exercise)} style={styles.viewIcon}>
                <FontAwesome5Icon name="eye" size={14} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEditExercise(index)} style={{ width: '80%' }}>
                <Typography variant="h4" style={[styles.text, { alignSelf: 'flex-start' }]}>
                  {exercise.name ? exercise.name : useGetExerciseData(exercise.id).name}
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveExercise(exercise.id)} style={styles.viewIcon}>
                <FontAwesomeIcon name="trash" size={20} style={{ color: red }} />
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity style={styles.addExerciseButton} onPress={() => handleSetStep(1)}>
          <Typography variant="h3" style={styles.addExerciseButtonText}>
            + Add exercises
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SelectedExercisesSection;
