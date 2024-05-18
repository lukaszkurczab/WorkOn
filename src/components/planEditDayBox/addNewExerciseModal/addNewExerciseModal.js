import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_EXERCISE } from '../../../store/reducers/planReducer';
import AtlasDropdown from '../../atlasDropdown/atlasDropdown';
import styles from './addNewExerciseModal.styles';

const AddNewExerciseModal = ({ onConfirm, dayName }) => {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercises.exercises);
  const selecterMusclesGroup = useSelector(state => state.atlas.selectedGroup);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleAddSelectedExercises = exercise => {
    if (selectedExercises.some(item => item.name === exercise.name)) {
      const newSelectedExercises = selectedExercises.filter(item => item.name != exercise.name);
      setSelectedExercises(newSelectedExercises);
    } else {
      const newSelectedExercises = [...selectedExercises, exercise];
      setSelectedExercises(newSelectedExercises);
    }
  };

  const handleConfirm = () => {
    dispatch(ADD_EXERCISE({ dayName: dayName, exercises: selectedExercises }));
    onConfirm();
  };

  return (
    <View style={styles.container}>
      <AtlasDropdown />
      <View style={{ height: 540 }}>
        <ScrollView style={styles.exercisesList}>
          {exercises.map(exercise => {
            if (selecterMusclesGroup === 'Select group' || exercise.groups.includes(selecterMusclesGroup)) {
              return (
                <TouchableOpacity style={styles.checkboxRow} onPress={() => handleAddSelectedExercises(exercise)} key={exercise.name}>
                  <Checkbox value={selectedExercises.includes(exercise)} />
                  <Text style={styles.checkboxText}>{exercise.name}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
        <TouchableOpacity onPress={handleConfirm} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewExerciseModal;
