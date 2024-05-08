import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import HistoryDetails from '../../components/historyDetails/historyDetails';
import styles from './calendarScreen.styles';
import Navigation from '../../components/navigation/navigation';

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const historyData = useSelector(store => store.user.data.history);
  const [dayData, setDayData] = useState([]);
  let markedDays = {};

  const handleDayPress = date => {
    setDayData(historyData.filter(day => day.date === date));
  };

  historyData.map(day => {
    markedDays = {
      ...markedDays,
      [day.date]: { startingDay: true, endingDay: true, color: 'orange' },
    };
  });

  return (
    <Navigation>
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
    </Navigation>
  );
};

export default CalendarScreen;
