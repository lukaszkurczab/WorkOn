import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanEditTable from "../../components/planEditTable/planEditTable";
import { CHANGE_PLAN_TYPE } from "../../store/reducers/planReducer"
import styles from './planEditScreen.styles';

const PlanEditScreen = () => {
    const dispatch = useDispatch();
    const [editablePlanName, setEditablePlanName] = useState(false);
    const [selectedPlanName, setSelectedPlanName] = useState(useSelector((store) => store.plans.planToEdit.name));
    const selectedPlan = useSelector((store) => store.plans.planToEdit);

    return(
        <View style={styles.container}>
            <View style={styles.rowWrapper}>
                <TextInput
                    style={styles.planName}
                    defaultValue={selectedPlanName}
                    editable={editablePlanName}
                />
                <TouchableOpacity onPress={() => setEditablePlanName(true)}>
                    <Icon name='edit' size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
                <Text style={styles.planType}>Plan type</Text>
                <View style={[styles.planTypeButton, selectedPlan.planType === 'weekly' ? styles.planTypeButtonActive : null]}>
                    <TouchableOpacity onPress={() => dispatch(CHANGE_PLAN_TYPE('weekly'))}>
                        <Text style={[styles.planTypeButtonText, selectedPlan.planType == 'weekly' ? styles.planTypeButtonTextActive : null]}>weekly</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.planTypeButton, selectedPlan.planType === 'daily' ? styles.planTypeButtonActive : null]}>
                    <TouchableOpacity onPress={() => dispatch(CHANGE_PLAN_TYPE('daily'))}>
                        <Text style={[styles.planTypeButtonText, selectedPlan.planType == 'daily' ? styles.planTypeButtonTextActive : null]}>daily</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <PlanEditTable plan={selectedPlan} />
        </View>
    )
};

export default PlanEditScreen;