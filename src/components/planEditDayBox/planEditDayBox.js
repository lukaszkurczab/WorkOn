import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditExercise from '../planEditExercise/planEditExercise';
import { CHANGE_DAY_NAME } from '../../store/reducers/planReducer';
import styles from './planEditDayBox.styles';

const PlanEditDayBox = ({ day, handleSetExerciseToEdit }) => {
  const dispatch = useDispatch();
  const [editableDayName, setEditableDayName] = useState(false);
  const [dayName, setDayName] = useState(day.name);

  const handleConfirmNameChange = () => {
    dispatch(CHANGE_DAY_NAME({ dayName, day }));
    setEditableDayName(false);
  };

  return (
    <ScrollView key={day.name}>
      <View style={styles.rowWrapper}>
        <TextInput
          style={styles.planName}
          defaultValue={dayName}
          editable={editableDayName}
          onChangeText={newName => setDayName(newName)}
        />
        {editableDayName ? (
          <TouchableOpacity onPress={handleConfirmNameChange}>
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
          <PlanEditExercise exercise={exercise} key={exercise.id} handleSetExerciseToEdit={handleSetExerciseToEdit} dayName={day.name} />
        ))}
        <Text style={styles.text}>+ Add</Text>
      </View>
    </ScrollView>
  );
};

export default PlanEditDayBox;
