import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './weeklyTableHeading.styles';

const weekDays = [{
    fullName: 'Monday',
    shortName: 'MON'
},{
    fullName: 'Tuesday',
    shortName: 'TUE'
},{
    fullName: 'Wednesday',
    shortName: 'WED'
},{
    fullName: 'Thursday',
    shortName: 'THU'
},{
    fullName: 'Friday',
    shortName: 'FRI'
},{
    fullName: 'Saturday',
    shortName: 'SAT'
},{
    fullName: 'Sunday',
    shortName: 'SUN'
}]

const WeeklyTableHeading = ({ onChange, activeDay}) => {
    return (
        <View style={styles.header}>
            {weekDays.map((day, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.headerCell, activeDay === day.fullName ? styles.headerCellActive : null]}
                    onPress={()=>onChange(day.fullName)}
                >
                    <View>
                        <Text style={styles.headerText}>{day.shortName}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
};

export default WeeklyTableHeading;