import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import AtlasDropdown from '../../atlasDropdown/atlasDropdown';
import ExerciseTile from '../../tiles/exerciseTile/exerciseTile';
import styles from './addNewExerciseModal.styles';

const AddNewExerciseModal = ({ onConfirm }) => {
  const exercises = useSelector(store => store.exercises.data);
  const selecterMusclesGroup = useSelector(store => store.atlas.selectedGroup);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleAddSelectedExercises = exercise => {
    if (selectedExercises.includes(exercise)) {
      const newSelectedExercises = selectedExercises.filter(item => item != exercise);
      setSelectedExercises(newSelectedExercises);
    } else {
      const newSelectedExercises = [...selectedExercises, exercise];
      setSelectedExercises(newSelectedExercises);
    }
    console.log(selectedExercises);
  };

  return (
    <View style={styles.container}>
      <AtlasDropdown />
      <View style={{ height: 540 }}>
        <ScrollView style={styles.exercisesList}>
          {exercises.map(exercise => {
            if (selecterMusclesGroup === 'Select group' || exercise.groups.includes(selecterMusclesGroup)) {
              return (
                <TouchableOpacity style={styles.checkboxRow} onPress={() => handleAddSelectedExercises(exercise.name)}>
                  <Checkbox value={selectedExercises.includes(exercise.name)} />
                  <Text style={styles.checkboxText}>{exercise.name}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
        <TouchableOpacity onPress={() => onConfirm({ id: exercise.id, series: modifiedSeries })} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewExerciseModal;
