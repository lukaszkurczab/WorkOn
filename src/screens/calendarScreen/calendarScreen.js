import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { history as historyData } from "../../store/db/history";
import HistoryDetails from "../../components/historyDetails/historyDetails";
import styles from './calendarScreen.styles';

const CalendarScreen = () => {
    const [dayData, setDayData] = useState([]);
    let markedDays = {};

    const handleDayPress = (day) => {
        setDayData(historyData.filter((trening) => trening.date === day))
    }

    historyData.map((day) => {
        markedDays = {
            ...markedDays,
            [day.date]: { startingDay: true, endingDay: true, color: 'orange' }
        }
    })

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={day => {
                    handleDayPress(day.dateString);
                }}
                markingType={'period'}
                markedDates={markedDays}
            />
            <HistoryDetails dayHistory={dayData} />
        </View>
    );
};

export default CalendarScreen;