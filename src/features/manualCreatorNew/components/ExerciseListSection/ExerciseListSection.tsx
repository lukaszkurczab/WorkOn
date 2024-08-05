import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './ExerciseListSection.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Day } from '../../../../types/plans';
import { useDispatch } from '../../../../utility/hooks';
import { ExerciseData } from '../../../../types/exercises';
import { SELECT_EXERCISE } from '../../store/slice/slice';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { exercisesList, muscleGroupsList } from '../../../../assets/exercises/_exercise';
import GroupContainer from '../GroupContainer/GroupContainer';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

type ExerciseListSectionProps = {
  day: Day;
  handleClose: () => void;
};

const ExerciseListSection = ({ day, handleClose }: ExerciseListSectionProps) => {
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState('');
  const [tempSelected, setTempSelected] = useState(day.exercises);

  const filteredExercises = exercisesList.filter(exercise =>
    exercise.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  const handleSelect = (exercise: ExerciseData) => {
    const exerciseIndex = tempSelected.findIndex(item => item.id === exercise.id);
    if (exerciseIndex === -1) {
      const newTempSelected = [...tempSelected];
      newTempSelected.push({
        id: exercise.id,
        name: exercise.name,
        loadIncrease: 0,
        repsRange: [4, 6],
        series: [],
      });
      setTempSelected(newTempSelected);
    } else {
      const newTempSelected = tempSelected.filter(item => item.id !== exercise.id);
      setTempSelected(newTempSelected);
    }
  };

  const handleConfirm = () => {
    dispatch(SELECT_EXERCISE({ day: day, exercises: tempSelected }));
    handleClose();
  };

  return (
    <View style={styles.container}>
      <TextInput value={searchedText} placeholder="Search" onChangeText={setSearchedText} style={styles.input} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 16 }}>
        <View style={styles.atlasWrapper}>
          {muscleGroupsList.map(group => {
            const exercisesForGroup = filteredExercises.filter(exercise => exercise.group.includes(group));

            if (exercisesForGroup.length === 0) return null;

            return (
              <GroupContainer
                key={group}
                group={group}
                exercises={exercisesForGroup}
                searchedText={searchedText}
                onSelect={handleSelect}
                selectedExercises={tempSelected}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button variant="outlined" onPress={() => handleClose()} style={styles.button}>
          <Typography variant="h3">Cancel</Typography>
        </Button>
        <Button onPress={() => handleConfirm()} style={styles.button}>
          <Typography variant="h3">Select</Typography>
        </Button>
      </View>
    </View>
  );
};

export default ExerciseListSection;
