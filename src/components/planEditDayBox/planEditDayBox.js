import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditExercise from '../planEditExercise/planEditExercise';
import { CHANGE_DAY_NAME } from '../../store/reducers/planReducer';
import styles from './planEditDayBox.styles';

const PlanEditDayBox = ({ day, handleSetExerciseToEdit, handleRemoveDay, handleShowAddExerciseModal, handleRemoveExercise }) => {
  const dispatch = useDispatch();
  const [editableDayName, setEditableDayName] = useState(false);
  const [dayName, setDayName] = useState(day.name);

  const handleConfirmNameChange = () => {
    dispatch(CHANGE_DAY_NAME({ dayName, day }));
    setEditableDayName(false);
  };

  return (
    <ScrollView key={dayName}>
      <View style={styles.container}>
        <View style={styles.rowWrapper}>
          <TextInput
            style={styles.planName}
            defaultValue={dayName}
            editable={editableDayName}
            onChangeText={newName => setDayName(newName)}
          />
          <View style={styles.iconsWrapper}>
            {editableDayName ? null : (
              <TouchableOpacity onPress={() => handleRemoveDay(dayName)}>
                <Icon name='trash' size={26} style={styles.icon} />
              </TouchableOpacity>
            )}
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
        </View>
        <View style={styles.exercisesWrapper}>
          {day.exercises.map(exercise => (
            <PlanEditExercise
              exercise={exercise}
              key={exercise.id}
              handleSetExerciseToEdit={handleSetExerciseToEdit}
              handleRemoveExercise={handleRemoveExercise}
              dayName={dayName}
            />
          ))}
          <TouchableOpacity onPress={() => handleShowAddExerciseModal(dayName)}>
            <Text style={styles.text}>+ Add exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlanEditDayBox;
