import { View, Text } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './planEditExercise.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlanEditExercise = ({ exercise, handleSetExerciseToEdit, dayName }) => {
  const exercisesList = useSelector(state => state.exercises.data);
  const [dropdown, setDropdown] = useState(false);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);

  return (
    <View style={styles.container} key={exercise.id}>
      <TouchableOpacity onPress={() => setDropdown(!dropdown)}>
        <Text style={styles.name}>{exerciseData.name}</Text>
        {dropdown && (
          <View style={styles.exerciseDetails}>
            <Text style={styles.text}>Series:</Text>
            <View>
              {exercise.series.map((serie, index) => (
                <View style={styles.serieRow} key={serie.id}>
                  <Text style={styles.text}>{index + 1 + ')'}</Text>
                  <View>
                    <Text style={styles.text}>Reps: {serie.reps}</Text>
                    <Text style={styles.text}>Weight: {serie.weight} kg</Text>
                  </View>
                </View>
              ))}
            </View>
            <Text style={styles.text}>
              Reps range: {exercise.repsRange[0]}-{exercise.repsRange[1]}
            </Text>
            <Text style={styles.text}>Weight increase: {exercise.loadIncrease} kg</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleSetExerciseToEdit(exercise, dayName)}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PlanEditExercise;
