import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './SelectedExercisesSection.styles';
import { Day } from '../../../../types/plans';
import Button from '../../../../components/Button/Button';
import ExerciseListSection from '../ExerciseListSection/ExerciseListSection';
import { useDispatch } from '../../../../utility/hooks';
import { CHANGE_EXERCISES_ORDER, SET_SHOW_NAVIGATION } from '../../store/slice/slice';
import { DraggableList } from '../../../../components/DraggableList/DraggableList';
import { Exercise } from '../../../../types/exercises';

type SelectedExercisesSectionProps = {
  day: Day;
};

const SelectedExercisesSection = ({ day }: SelectedExercisesSectionProps) => {
  const dispatch = useDispatch();
  const [selectExercises, setSelectExercises] = useState(false);

  useEffect(() => {
    dispatch(SET_SHOW_NAVIGATION(true));
  }, []);

  const handleSelectExercisesPress = () => {
    dispatch(SET_SHOW_NAVIGATION(false));
    setSelectExercises(true);
  };

  const handleCloseSelectExercises = () => {
    setSelectExercises(false);
    dispatch(SET_SHOW_NAVIGATION(true));
  };

  const handleDragEnd = (newData: Exercise[]) => {
    dispatch(CHANGE_EXERCISES_ORDER({ dayId: day.id, newOrder: newData }));
  };

  return (
    <View style={{ width: '100%' }}>
      {selectExercises ? (
        <ExerciseListSection day={day} handleClose={() => handleCloseSelectExercises()} />
      ) : (
        <View key={day.id} style={styles.daySection}>
          <Typography variant="h2">{day.name}</Typography>
          <DraggableList
            data={day.exercises}
            renderItem={item => <Typography variant="h3">{item.name}</Typography>}
            onDragEnd={handleDragEnd}
          />
          <Button variant="outlined" onPress={() => handleSelectExercisesPress()}>
            <Typography variant="h3">+ Add exercises</Typography>
          </Button>
        </View>
      )}
    </View>
  );
};

export default SelectedExercisesSection;
