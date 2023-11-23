import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './planEditScreen.styles';
import PlanEditWeekTable from "../../components/planEditTable/planEditWeekTable";

const PlanEditScreen = () => {
    const [editablePlanName, setEditablePlanName] = useState(false);
    const [selectedPlanType, setSelectedPlanType] = useState(useSelector((store) => store.plans.planToEdit.planType));
    const [selectedPlanName, setSelectedPlanName] = useState(useSelector((store) => store.plans.planToEdit.name));
    const selectedPlan = useSelector((store) => store.plans.planToEdit.days);

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
                <View style={[styles.planTypeButton, selectedPlanType === 'weekly' ? styles.planTypeButtonActive : null]}>
                    <TouchableOpacity onPress={() => setSelectedPlanType('weekly')}>
                        <Text style={[styles.planTypeButtonText, selectedPlanType === 'weekly' ? styles.planTypeButtonTextActive : null]}>weekly</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.planTypeButton, selectedPlanType === 'daily' ? styles.planTypeButtonActive : null]}>
                    <TouchableOpacity onPress={() => setSelectedPlanType('daily')}>
                        <Text style={[styles.planTypeButtonText, selectedPlanType === 'daily' ? styles.planTypeButtonTextActive : null]}>daily</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <PlanEditWeekTable plan={selectedPlan} />
        </View>
    )
};

export default PlanEditScreen;