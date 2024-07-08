import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import styles from './CalendarScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import { Typography } from '../../../../components/Typography/Typography';
import { useFormatDate } from '../../../../utility/hooks';
import { WorkoutSession } from '../../../../types/users';
import { navigate } from '../../../../utility/navigate';

const CalendarScreen = () => {
  const userHistory = useSelector((state: RootState) => state.user.history);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const groupedHistory = userHistory.reduce<Record<string, WorkoutSession[]>>((acc, historyItem) => {
    const date = useFormatDate(new Date(historyItem.date));
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(historyItem);
    return acc;
  }, {});

  const markedDates = Object.keys(groupedHistory).reduce<Record<string, { marked: boolean }>>((acc, date) => {
    acc[date] = { marked: true };
    return acc;
  }, {});

  const handleDayPress = (date: Date) => {
    setSelectedDate(useFormatDate(date));
  };

  const handlePreviewTraining = (training: WorkoutSession) => {
    navigate('WorkoutSummaryScreen', { workout: training });
  };

  return (
    <Layout showHeader={false}>
      <View>
        <View style={styles.calendarWrapper}>
          <Calendar markedDates={markedDates} onDayPress={handleDayPress} />
        </View>
        <ScrollView>
          <View style={{ gap: 16 }}>
            {selectedDate && groupedHistory[selectedDate] ? (
              <View key={selectedDate} style={{ gap: 8 }}>
                <Typography variant="h3">{selectedDate}</Typography>
                {groupedHistory[selectedDate].map(historyItem => (
                  <TouchableOpacity onPress={() => handlePreviewTraining(historyItem)} key={historyItem.id}>
                    <HistoryItem historyItem={historyItem} />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              Object.keys(groupedHistory).map(date => (
                <View key={date} style={{ gap: 8 }}>
                  <Typography variant="h3">{date}</Typography>
                  {groupedHistory[date].map(historyItem => (
                    <TouchableOpacity onPress={() => handlePreviewTraining(historyItem)} key={historyItem.id}>
                      <HistoryItem historyItem={historyItem} />
                    </TouchableOpacity>
                  ))}
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default CalendarScreen;
