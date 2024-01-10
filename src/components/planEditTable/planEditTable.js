import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from "react-redux";
import ButtonBig from "../buttons/buttonBig/buttonBig";
import ExerciseRow from "./exerciseRow/exerciseRow";
import ExerciseModifyModal from "./exerciseModifyModal/exerciseModifyModal";
import WeeklyTableHeading from "./weeklyTableHeading/weeklyTableHeading";
import DailyTableHeading from "./dailyTableHeading/dailyTableHeading";
import { ADD_DAY, REMOVE_DAY, EDIT_PLAN } from "../../store/reducers/planReducer";
import styles from './planEditTable.styles';

const PlanEditTable = ({ plan }) => {
    const dispatch = useDispatch();
    const [activeDay, setActiveDay] = useState(plan.days[0].name);
    const [daysPlanToEdit, setDaysPlanToEdit] = useState(plan.days.filter((day) => day.name === activeDay)[0].exercises)
    const [showEditModal, setShowEditModla] = useState(false)
    const [exerciseIndexToEdit, setExerciseIndexToEdit] = useState()

    useEffect(() => {
        setDaysPlanToEdit(plan.days.filter((day) => day.name === activeDay)[0].exercises)
    }, [activeDay])

    const handleAdd = () => { }

    const handleAddDay = (dayName) => { 
        dispatch(ADD_DAY(dayName))
    }
    
    const handleRemoveDay = () => {
        dispatch(REMOVE_DAY())
    }
    
    const handleDayChange = (newDay) => {
        setActiveDay(newDay)
    }

    const handleSelectToEdit = (exerciseIndex) => {
        setExerciseIndexToEdit(exerciseIndex)
        setShowEditModla(true)
    }

    const handleEditExercise = (updatedExercise) => {  
        const x = { ...plan } 
        x.days[0].exercises[0] = 0
        console.log(x.days[0].exercises[0])
        //dispatch(editedPlan)
        setShowEditModla(false)
    }

    return (
        <View style={styles.container}>
            {plan.planType === 'weekly' ? (
                <WeeklyTableHeading onChange={handleDayChange} activeDay={activeDay} />
            ) : (
                    <DailyTableHeading
                        onChange={handleDayChange}
                        activeDay={activeDay}
                        daysNumber={plan.days.length}
                        addDay={handleAddDay}
                        removeDay={handleRemoveDay}
                    />
            )}
            <ScrollView>
                <View style={styles.body}>
                    {daysPlanToEdit.map((exercise, index) => (
                        <ExerciseRow exercise={exercise} key={exercise.id} onEdit={handleSelectToEdit} exerciseIndex={index} />
                    ))}
                </View>
                <ButtonBig additionalStyles={{alignSelf: 'center'}} theme={'light'} onClick={handleAdd}>
                    <Text>Add</Text>
                </ButtonBig>
            </ScrollView>
            {showEditModal && <ExerciseModifyModal exercise={daysPlanToEdit[exerciseIndexToEdit]} onConfirm={handleEditExercise} />}
        </View>
    )
};

export default PlanEditTable;