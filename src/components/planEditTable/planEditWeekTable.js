import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import styles from './planEditWeekTable.styles';

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const PlanEditWeekTable = ({plan}) => {
    const [activeDay, setActiveDay] = useState('MON');
    const [daysPlanToEdit, setDaysPlanToEdit] = useState(plan.filter((day) => day.name === activeDay)[0].exercises)

    useEffect(() => {
        setDaysPlanToEdit(plan.filter((day) => day.name === activeDay)[0].exercises)
    }, [activeDay])

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
            <View style={styles.body}>
                <Text>{JSON.stringify(daysPlanToEdit)}</Text>
            </View>
        </View>
    )
};

export default PlanEditWeekTable;