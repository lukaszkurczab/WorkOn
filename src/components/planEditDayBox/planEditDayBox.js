import { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditExercise from '../planEditExercise/planEditExercise';
import styles from './planEditDayBox.styles';

const PlanEditDayBox = ({ day, handleSetExerciseToEdit }) => {
  const [editableDayName, setEditableDayName] = useState(false);

  return (
    <ScrollView key={day.name}>
      <View style={styles.rowWrapper}>
        <TextInput
          style={styles.planName}
          defaultValue={day.name}
          editable={editableDayName}
          onChangeText={newName => console.log(newName)}
        />
        {editableDayName ? (
          <TouchableOpacity onPress={() => setEditableDayName(false)}>
            <Icon name='check' size={26} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEditableDayName(true)}>
            <Icon name='edit' size={26} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.exercisesWrapper}>
        {day.exercises.map(exercise => (
          <PlanEditExercise exercise={exercise} key={exercise.id} handleSetExerciseToEdit={handleSetExerciseToEdit} />
        ))}
        <Text style={styles.text}>+ Add</Text>
      </View>
    </ScrollView>
  );
};

export default PlanEditDayBox;
