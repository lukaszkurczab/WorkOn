import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from 'react-native-calendars';
import HistoryDetails from "../../components/historyDetails/historyDetails";
import { REMOVE_FROM_HISTORY } from "../../store/reducers/historyReducer"
import styles from './calendarScreen.styles';

const CalendarScreen = () => {
    const dispatch = useDispatch();
    const historyData = useSelector((store) => store.history.history);
    const [dayData, setDayData] = useState([]);
    let markedDays = {};

    const handleDayPress = (date) => {
        setDayData(historyData.filter((day) => day.date === date))
    }

    const handleRemove = (id) => {
        dispatch(REMOVE_FROM_HISTORY(id))
        setDayData([])
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
            <HistoryDetails dayHistory={dayData} onRemove={handleRemove} />
        </View>
    );
};

export default CalendarScreen;