import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './WorkoutAddNewExercise.styles';
import { Typography } from '../../../../components/Typography/Typography';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { exercisesList, muscleGroupsList } from '../../../../assets/exercises/_exercise';
import GroupContainer from '../GroupContainer/GroupContainer';
import Button from '../../../../components/Button/Button';
import { Exercise, ExerciseData } from '../../../../types/exercises';
import ExerciseImage from '../../../../components/ExerciseImage/ExerciseImage';
import { backgroundColor, gray } from '../../../../styles/colors';
import SeriesEditSection from '../../../../components/SeriesEditSection/SeriesEditSection';
import { useDispatch, useGenerateID } from '../../../../utility/hooks';
import { LEAVE_ADD_EXERCISE, SELECT_EXERCISE, ADD_EXERCISE } from '../../store/slice/slice';

const WorkoutAddNewExercise = () => {
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState('');
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();
  const [selectedExerciseData, setSelectedExerciseData] = useState<ExerciseData>();

  const filteredExercises = exercisesList.filter(exercise =>
    exercise.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  const handleSelect = (exercise: ExerciseData) => {
    const newSelectedExercise: Exercise = {
      id: exercise.id,
      name: exercise.name,
      loadIncrease: 5,
      repsRange: [1, 50],
      series: [
        {
          id: '1',
          reps: 6,
          weight: 20,
        },
      ],
    };
    setSelectedExercise(newSelectedExercise);
    setSelectedExerciseData(exercise);
  };

  const handleBack = () => {
    dispatch(LEAVE_ADD_EXERCISE());
  };

  const handleConfirm = () => {
    dispatch(ADD_EXERCISE({ ...selectedExercise }));
    dispatch(SELECT_EXERCISE({ ...selectedExercise!, ...selectedExerciseData }));
  };

  const handleEdit = (property: string, newValue: number, index: number) => {
    const newSelectedExercise: Exercise = { ...selectedExercise! };
    if ((property = 'serieReps')) {
      newSelectedExercise.series[index] = {
        ...newSelectedExercise.series[index],
        reps: newValue,
      };
    } else {
      newSelectedExercise.series[index] = {
        ...newSelectedExercise.series[index],
        weight: newValue,
      };
    }
    setSelectedExercise(newSelectedExercise);
  };

  const handleAddSerie = () => {
    const newSelectedExercise: Exercise = {
      ...selectedExercise!,
      series: [
        ...selectedExercise!.series,
        {
          id: useGenerateID(),
          reps: 6,
          weight: 20,
        },
      ],
    };
    setSelectedExercise(newSelectedExercise);
  };

  const handleRemoveSerie = (exerciseId: string, index: number) => {
    const newSelectedExercise: Exercise = {
      ...selectedExercise!,
      id: exerciseId,
    };
    newSelectedExercise.series.splice(index, 1), setSelectedExercise(newSelectedExercise);
    setSelectedExercise(newSelectedExercise);
  };

  return (
    <View>
      {!selectedExercise ? (
        <>
          <TextInput value={searchedText} placeholder="Search" onChangeText={setSearchedText} style={styles.input} />
          <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 1, height: '80%' }}>
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
                    selectedExercises={[]}
                  />
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.buttonsWrapper}>
            <Button onPress={() => handleBack()} style={{ flexShrink: 1 }}>
              <Typography variant="h3">Cancel</Typography>
            </Button>
          </View>
        </>
      ) : (
        <View>
          <Typography variant="h2" style={{ alignSelf: 'center', marginBottom: 16 }}>
            {selectedExercise.name}
          </Typography>
          <ExerciseImage imageName={selectedExerciseData!.image} />
          <Typography variant="h2" style={{ marginTop: 16 }}>
            Series
          </Typography>
          {selectedExercise.series.map((serie, index) => (
            <SeriesEditSection
              reps={serie.reps}
              weight={serie.weight}
              index={index}
              exerciseId={selectedExercise.id}
              onEdit={handleEdit}
              onRemove={handleRemoveSerie}
              key={serie.id}
            />
          ))}
          <View
            style={[
              styles.row,
              {
                backgroundColor: gray,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: backgroundColor,
              },
            ]}
          >
            <TouchableOpacity onPress={() => handleAddSerie()} style={{ width: '100%' }}>
              <Typography
                variant="h5"
                style={{
                  color: backgroundColor,
                }}
              >
                + Add series
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsWrapper}>
            <Button onPress={() => setSelectedExercise(undefined)} style={{ flexShrink: 1 }}>
              <Typography variant="h3">Back</Typography>
            </Button>
            <Button onPress={() => handleConfirm()} style={{ flexShrink: 1 }}>
              <Typography variant="h3">Confirm</Typography>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default WorkoutAddNewExercise;
