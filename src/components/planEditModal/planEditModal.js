import { View, Text, TextInput } from 'react-native';
import { useState, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './planEditModal.styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { EDIT_EXERCISE } from '../../store/reducers/planReducer';

const PlanEditModal = ({ exercise, handleCloseModal }) => {
  const dispatch = useDispatch();
  const exercisesList = useSelector(state => state.exercises.data);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);
  const [exerciseToEdit, setExerciseToEdit] = useState(exercise);

  const handleSave = () => {
    dispatch(EDIT_EXERCISE());
    handleCloseModal(null);
  };

  const handleRepsChange = (newReps, serieId) => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: exerciseToEdit.repsRange,
      series: exerciseToEdit.series.map((serie, index) =>
        index === serieId
          ? {
              id: serie.id,
              reps: newReps,
              weight: serie.weight,
            }
          : serie,
      ),
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleWeightChange = (newWeight, serieId) => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: exerciseToEdit.repsRange,
      series: exerciseToEdit.series.map((serie, index) =>
        index === serieId
          ? {
              id: serie.id,
              reps: serie.reps,
              weight: newWeight,
            }
          : serie,
      ),
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleMinRepsChange = newMinReps => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: [newMinReps, exerciseToEdit.repsRange[1]],
      series: exerciseToEdit.series,
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleMaxRepsChange = newMaxReps => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: [exerciseToEdit.repsRange[0], newMaxReps],
      series: exerciseToEdit.series,
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleLoadIncreaseChange = newLoadIncrease => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: newLoadIncrease,
      repsRange: exerciseToEdit.repsRange,
      series: exerciseToEdit.series,
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleAddSerie = () => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: exerciseToEdit.repsRange,
      series: exerciseToEdit.series.concat([{ id: `${Math.floor(Math.random() * 100000)}`, reps: exerciseToEdit.repsRange[0], weight: 0 }]),
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  const handleRemoveSerie = serieId => {
    const newExerciseToEdit = {
      id: exerciseToEdit.id,
      loadIncrease: exerciseToEdit.loadIncrease,
      repsRange: exerciseToEdit.repsRange,
      series: exerciseToEdit.series.filter(serie => serie.id !== serieId),
    };
    setExerciseToEdit(newExerciseToEdit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.title}>{exerciseData.name}</Text>
          <View style={styles.seriesWrapper}>
            <Text style={styles.text}>Series</Text>
            {exerciseToEdit.series.map((serie, index) => (
              <View style={styles.serieRow} key={serie.id}>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.text}>Reps:</Text>
                    <TextInput
                      style={styles.input}
                      defaultValue={serie.reps.toString()}
                      inputMode='numeric'
                      onChangeText={value => handleRepsChange(value, index)}
                    />
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.text}>Weight:</Text>
                    <TextInput
                      style={styles.input}
                      defaultValue={serie.weight.toString()}
                      inputMode='numeric'
                      onChangeText={value => handleWeightChange(value, index)}
                    />
                    <Text style={styles.text}>kg</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleRemoveSerie(serie.id)}>
                  <View style={styles.removeButton}>
                    <Text style={styles.removeIcon}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
            <View style={styles.serieRow}>
              <TouchableOpacity onPress={handleAddSerie}>
                <Text style={styles.text}>Add serie + </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Reps range:</Text>
            <TextInput
              style={styles.input}
              defaultValue={exerciseToEdit.repsRange[0].toString()}
              inputMode='numeric'
              onChangeText={value => handleMinRepsChange(value)}
            />
            <Text style={styles.text}>-</Text>
            <TextInput
              style={styles.input}
              defaultValue={exerciseToEdit.repsRange[1].toString()}
              inputMode='numeric'
              onChangeText={value => handleMaxRepsChange(value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Weight increase:</Text>
            <TextInput
              style={styles.input}
              defaultValue={exerciseToEdit.loadIncrease.toString()}
              inputMode='numeric'
              onChangeText={value => handleLoadIncreaseChange(value)}
            />
            <Text style={styles.text}>kg</Text>
          </View>
          <View style={styles.buttonsRow}>
            <View style={styles.saveButton}>
              <TouchableOpacity onPress={() => handleCloseModal(null)}>
                <Text style={styles.saveText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.saveButton}>
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PlanEditModal;
