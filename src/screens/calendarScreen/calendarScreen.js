import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import HistoryDetails from '../../components/historyDetails/historyDetails';
import LastTrainingList from '../../components/lastTrainingList/lastTrainingList';
import styles from './calendarScreen.styles';
import Navigation from '../../components/Navigation/Navigation';

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const historyData = useSelector(state => state.user.data.history);
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
        {dayData.length > 0 && <HistoryDetails dayHistory={dayData} />}
        {dayData.length === 0 && <LastTrainingList data={historyData} />}
      </View>
    </Navigation>
  );
};

export default CalendarScreen;
