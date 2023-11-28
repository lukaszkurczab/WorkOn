import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFormatTime } from "../../utils/hooks";
import HistoryDetailsListItem from './historyDetailsListItem/historyDetailsListItem';
import styles from './historyDetails.styles';


const HistoryDetails = ({ dayHistory }) => {
    const [showExercises, setShoweExercises] = useState(false)
    return (
        <ScrollView style={styles.container}>
            {dayHistory.map(day => (
                <View key={day.id}>
                    <View style={styles.headingWrapper}>
                        <TouchableOpacity onPress={() => setShoweExercises(!showExercises)}>
                            <View>
                                <Text style={styles.name}>{day.name}</Text>
                                <Text style={styles.date}>{day.date}</Text>
                                <Text style={styles.text}>Total time: {useFormatTime(day.time)}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={[styles.listWrapper, {'display': showExercises ? 'flex' : 'none'}]}>
                        {day.exercises.map((exercise) => (
                            <HistoryDetailsListItem exercise={exercise} key={exercise.id} />
                        ))}
                    </ScrollView>
                </View>
            ))}
        </ScrollView>
    );
};

export default HistoryDetails;