import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import { updateUserRecords } from '../../store/actions/userActions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navigation from '../../components/navigation/Navigation';
import styles from './selectRecordsScreen.styles';

const SelectRecordsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercises.exercises);
  const userData = useSelector(state => state.user.data);
  const [exercisesList, setExercisesList] = useState([]);
  const [newExercise, setNewExercise] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [newWeight, setNewWeight] = useState('0');
  const [newRecords, setNewRecords] = useState(userData.records);

  useEffect(() => {
    const newExercisesList = [];
    exercises.map(exercise => {
      newExercisesList.push({ label: exercise.name, value: exercise.name });
    });
    setExercisesList(newExercisesList);
  }, []);

  const handleAdd = (exercise, weight) => {
    if (newExercise !== null && newWeight !== '0') {
      const updatedRecords = newRecords.filter(record => record.exercise !== exercise);
      setNewRecords([...updatedRecords, { exercise: exercise, weight: weight }]);
      setNewExercise(null);
      setNewWeight('0');
    }
  };

  const handleRemove = exerciseName => {
    setNewRecords(newRecords.filter(record => record.exercise !== exerciseName));
  };

  const handleConfirm = () => {
    dispatch(updateUserRecords({ userId: userData.id, records: newRecords }));
    navigation.navigate('SettingsScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Selected records</Text>
          {newRecords &&
            newRecords.map(record => (
              <View style={styles.row} key={record.exercise}>
                <Text style={styles.text}>{record.exercise}</Text>
                <Text style={styles.text}>
                  {record.weight} kg
                  <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(record.exercise)}>
                    <Icon name="times-circle" size={18} style={styles.removeIcon} />
                  </TouchableOpacity>
                </Text>
              </View>
            ))}
          <View style={styles.row}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={exercisesList}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select exercise' : '...'}
              searchPlaceholder="Search..."
              value={newExercise}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setNewExercise(item.value);
                setIsFocus(false);
              }}
              style={styles.dropdown}
            />
            <TextInput value={newWeight} style={styles.input} onChangeText={setNewWeight} keyboardType="numeric" />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={() => handleAdd(newExercise, newWeight)}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SelectRecordsScreen;
