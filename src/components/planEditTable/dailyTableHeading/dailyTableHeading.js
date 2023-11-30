import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './dailyTableHeading.styles';

const planDays = [{
    fullName: 'Day A',
    shortName: 'A'
},{
    fullName: 'Day B',
    shortName: 'B'
},{
    fullName: 'Day C',
    shortName: 'C'
},{
    fullName: 'Day D',
    shortName: 'D'
},{
    fullName: 'Day E',
    shortName: 'E'
},{
    fullName: 'Day F',
    shortName: 'F'
},{
    fullName: 'Day G',
    shortName: 'G'
}]

const DailyTableHeading = ({ onChange, activeDay, daysNumber, addDay, removeDay }) => {
    return (
        <View style={styles.header}>
            {planDays.map((day, index) => {
                return index < daysNumber ? (
                    <TouchableOpacity
                        key={index}
                        style={[styles.headerCell, activeDay === day.fullName ? styles.headerCellActive : null]}
                        onPress={() => onChange(day.fullName)}
                    >
                        <View>
                            <Text style={styles.headerText}>{day.shortName}</Text>
                        </View>
                    </TouchableOpacity>
                ) : null
            })}
            {daysNumber < 7 ? (
                <>
                    <TouchableOpacity
                        style={styles.headerCell}
                        onPress={()=>addDay(planDays[daysNumber].fullName)}
                    >
                        <View>
                            <Text style={styles.headerText}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerCell}
                        onPress={()=>removeDay()}
                    >
                        <View>
                            <Text style={styles.headerText}>-</Text>
                        </View>
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity
                    style={styles.headerCell}
                    onPress={()=>removeDay()}
                >
                    <View>
                        <Text style={styles.headerText}>-</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
};

export default DailyTableHeading;