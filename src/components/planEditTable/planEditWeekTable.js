import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import ButtonBig from "../buttons/buttonBig/buttonBig";
import ExerciseRow from "./exerciseRow/exerciseRow";
import ExerciseModifyModal from "./exerciseModifyModal/exerciseModifyModal";
import styles from './planEditWeekTable.styles';

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const PlanEditWeekTable = ({plan}) => {
    const [activeDay, setActiveDay] = useState('MON');
    const [daysPlanToEdit, setDaysPlanToEdit] = useState(plan.filter((day) => day.name === activeDay)[0].exercises)
    const [showEditModal, setShowEditModla] = useState(false)
    const [exerciseToEdit, setExerciseToEdit] = useState({})

    useEffect(() => {
        setDaysPlanToEdit(plan.filter((day) => day.name === activeDay)[0].exercises)
    }, [activeDay])

    const handleAdd = () => { }
    
    const handleEdit = (exercise) => {
        setExerciseToEdit(exercise)
        setShowEditModla(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {weekDays.map((day, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.headerCell, activeDay === day ? styles.headerCellActive : null]}
                        onPress={()=>setActiveDay(day)}
                    >
                        <View>
                            <Text style={styles.headerText}>{day}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                <View style={styles.body}>
                    {daysPlanToEdit.map((exercise) => (
                        <ExerciseRow exercise={exercise} key={exercise.id} onEdit={handleEdit} />
                    ))}
                </View>
                <ButtonBig additionalStyles={{alignSelf: 'center'}} theme={'light'} onClick={handleAdd}>
                    <Text>Add</Text>
                </ButtonBig>
            </ScrollView>
            {showEditModal && <ExerciseModifyModal exercise={exerciseToEdit} onConfirm={() => setShowEditModla(false)} />}
        </View>
    )
};

export default PlanEditWeekTable;