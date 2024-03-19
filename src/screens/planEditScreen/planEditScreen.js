import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditTable from '../../components/planEditTable/planEditTable';
import { CHANGE_PLAN_TYPE, CHANGE_PLAN_NAME } from '../../store/reducers/planReducer';
import { editPlan } from '../../store/slice/userSlice';
import styles from './planEditScreen.styles';

const PlanEditScreen = () => {
  const dispatch = useDispatch();
  const [editablePlanName, setEditablePlanName] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState(useSelector(store => store.plans.planToEdit.name));
  const planToEdit = useSelector(store => store.plans.planToEdit);
  const userId = useSelector(store => store.user.data.id);

  const handleSavePress = () => {
    const data = {
      userId: userId,
      plan: planToEdit,
    };
    console.log(data.plan.days[0].exercises[0]);
    //dispatch(editPlan(data));
    //navigation.navigate('PlansListScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowWrapper}>
        <TextInput
          style={styles.planName}
          defaultValue={selectedPlanName}
          editable={editablePlanName}
          onChangeText={newName => dispatch(CHANGE_PLAN_NAME(newName))}
        />
        {editablePlanName ? (
          <TouchableOpacity onPress={() => setEditablePlanName(false)}>
            <Icon name='check' size={26} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEditablePlanName(true)}>
            <Icon name='edit' size={26} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.planType}>Plan type</Text>
        <View style={[styles.planTypeButton, planToEdit.planType === 'weekly' ? styles.planTypeButtonActive : null]}>
          <TouchableOpacity onPress={() => dispatch(CHANGE_PLAN_TYPE('weekly'))}>
            <Text style={[styles.planTypeButtonText, planToEdit.planType == 'weekly' ? styles.planTypeButtonTextActive : null]}>
              weekly
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.planTypeButton, planToEdit.planType === 'daily' ? styles.planTypeButtonActive : null]}>
          <TouchableOpacity onPress={() => dispatch(CHANGE_PLAN_TYPE('daily'))}>
            <Text style={[styles.planTypeButtonText, planToEdit.planType == 'daily' ? styles.planTypeButtonTextActive : null]}>daily</Text>
          </TouchableOpacity>
        </View>
      </View>
      <PlanEditTable plan={planToEdit} />
      <TouchableOpacity onPress={handleSavePress}>
        <View style={styles.saveButtonWrapper}>
          <Icon name='save' size={24} style={styles.saveIcon} />
          <Text style={styles.saveButton}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlanEditScreen;
