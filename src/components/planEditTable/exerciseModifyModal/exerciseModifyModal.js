import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import styles from './exerciseModifyModal.styles';

const ExerciseModifyModal = ({ onConfirm, exercise }) => {
  const [modifiedSeries, setModifiedSeries] = useState(exercise.series);
  const exercisesList = useSelector(state => state.exercises.data);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);

  const handleAddSerie = () => {
    const newId = (Math.random() * 100000).toFixed();
    const newModifiedSeries = [
      ...modifiedSeries.series,
      {
        reps: 0,
        weight: 0,
        id: newId,
      },
    ];

    setModifiedSeries(newModifiedSeries);
  };

  const handleRemoveSerie = serieIndex => {
    const newModifiedSeries = modifiedSeries.filter(i => i.id != serieIndex);

    setModifiedSeries(newModifiedSeries);
  };

  const handleRepsChange = (newReps, index) => {
    const newModifiedSeries = [...modifiedSeries];
    newModifiedSeries[index] = {
      id: modifiedSeries[index].id,
      reps: Number(newReps) || 0,
      weight: modifiedSeries[index].weight,
    };
    setModifiedSeries(newModifiedSeries);
  };

  const handleWeightChange = (newWeight, index) => {
    const newModifiedSeries = [...modifiedSeries];
    newModifiedSeries[index] = {
      id: modifiedSeries[index].id,
      reps: modifiedSeries[index].reps,
      weight: Number(newWeight) || 0,
    };
    setModifiedSeries(newModifiedSeries);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{exerciseData.name}</Text>
      </View>
      {modifiedSeries.map((i, index) => (
        <View key={i.id} style={styles.serieWrapper}>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Serie {index + 1}:</Text>
            <TouchableOpacity onPress={() => handleRemoveSerie(i.id)}>
              <Icon name='trash' size={18} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={[styles.inputLabel, styles.seriesLabel]}>Reps:</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              maxLength={5}
              defaultValue={`${i.reps || ''}`}
              onChangeText={newText => handleRepsChange(newText, index)}></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={[styles.inputLabel, styles.seriesLabel]}>Weight:</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              maxLength={5}
              defaultValue={`${i.weight || ''}`}
              onChangeText={newText => handleWeightChange(newText, index)}></TextInput>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={handleAddSerie}>
        <Text style={styles.inputLabel}>Add serie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onConfirm({ id: exercise.id, series: modifiedSeries })} style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ExerciseModifyModal;
