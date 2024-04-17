import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditDayBox from '../../components/planEditDayBox/planEditDayBox';
import { CHANGE_PLAN_NAME, ADD_DAY_TO_PLAN } from '../../store/reducers/planReducer';
import { editPlan } from '../../store/slice/userSlice';
import styles from './planEditScreen.styles';
import PlanEditModal from '../../components/planEditModal/planEditModal';
import AddNewExerciseModal from '../../components/planEditDayBox/addNewExerciseModal/addNewExerciseModal';

const PlanEditScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const planToEditName = useSelector(store => store.plans.planToEdit.name);
  const planToEdit = useSelector(store => store.plans.planToEdit);
  const userId = useSelector(store => store.user.data.id);
  const [editablePlanName, setEditablePlanName] = useState(false);
  const [showAddExerciseModal, setShowAddExerciseModal] = useState(false);
  const [exerciseToEdit, setExerciseToEdit] = useState(null);
  const [dayName, setDayName] = useState(null);
  const [planName, setPlanName] = useState(planToEditName);
  const [dayNameToAddExercise, setDayNameToAddExercise] = useState('');

  const handleSetExerciseToEdit = (exercise, newDayName) => {
    setExerciseToEdit(exercise);
    setDayName(newDayName);
  };

  const handleSavePress = () => {
    const data = {
      userId: userId,
      plan: planToEdit,
    };
    dispatch(editPlan(data));
    navigation.navigate('PlansListScreen');
  };

  const handlePlanNameChange = newName => {
    setPlanName(newName);
  };

  const handleConfirmNameChange = () => {
    dispatch(CHANGE_PLAN_NAME(planName));
    setEditablePlanName(false);
  };

  const handleAddDay = () => {
    dispatch(ADD_DAY_TO_PLAN());
  };

  const handleShowAddExerciseModal = dayName => {
    setDayNameToAddExercise(dayName);
    setShowAddExerciseModal(true);
  };

  const handleCloseAddExerciseModal = () => {
    setShowAddExerciseModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.rowWrapper}>
            <TextInput
              style={styles.planName}
              defaultValue={planName}
              editable={editablePlanName}
              onChangeText={newName => handlePlanNameChange(newName)}
            />
            {editablePlanName ? (
              <TouchableOpacity onPress={handleConfirmNameChange}>
                <Icon name='check' size={26} style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setEditablePlanName(true)}>
                <Icon name='edit' size={26} style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>
          {planToEdit.days.map((day, index) => (
            <PlanEditDayBox
              day={day}
              key={`${day.name}+${index}`}
              handleSetExerciseToEdit={handleSetExerciseToEdit}
              handleShowAddExerciseModal={handleShowAddExerciseModal}
            />
          ))}
          <TouchableOpacity onPress={handleAddDay}>
            <View style={styles.addDayButton}>
              <Text style={styles.addDayText}>+ Add day</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSavePress}>
            <View style={styles.saveButtonWrapper}>
              <Icon name='save' size={24} style={styles.saveIcon} />
              <Text style={styles.saveButton}>Save</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {exerciseToEdit !== null ? (
        <PlanEditModal exercise={exerciseToEdit} handleCloseModal={handleSetExerciseToEdit} dayName={dayName} />
      ) : null}
      {showAddExerciseModal && <AddNewExerciseModal onConfirm={handleCloseAddExerciseModal} dayName={dayNameToAddExercise} />}
    </>
  );
};

export default PlanEditScreen;
