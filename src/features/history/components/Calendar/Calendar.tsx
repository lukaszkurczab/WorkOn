import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './Calendar.styles';
import { backgroundColor, blue, gray } from '../../../../styles/colors';

interface MarkedDate {
  color: string;
  details: string;
}

interface CalendarProps {
  markedDates?: { [key: string]: MarkedDate };
  onDateChange?: (month: number, year: number) => void;
  onDayPress?: (date: string) => void;
}

const daysInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();

const generateCalendarMatrix = (month: number, year: number): { day: number; isCurrentMonth: boolean }[][] => {
  const totalDays = daysInMonth(month, year);
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const matrix: { day: number; isCurrentMonth: boolean }[][] = [];
  let counter = 1;

  const prevMonthDays = daysInMonth(month - 1, year);
  let prevMonthCounter = prevMonthDays - firstDay + 1;

  let nextMonthCounter = 1;

  for (let row = 0; row < 6; row++) {
    const rowData: { day: number; isCurrentMonth: boolean }[] = [];
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        rowData.push({ day: prevMonthCounter++, isCurrentMonth: false });
      } else if (counter > totalDays) {
        rowData.push({ day: nextMonthCounter++, isCurrentMonth: false });
      } else {
        rowData.push({ day: counter++, isCurrentMonth: true });
      }
    }
    matrix.push(rowData);
  }
  return matrix;
};

const Calendar: React.FC<CalendarProps> = ({ markedDates = {}, onDateChange, onDayPress }) => {
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [viewMode, setViewMode] = useState<'day' | 'month' | 'year'>('day');
  const years = Array.from({ length: 96 }, (_, i) => 2001 + i);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (viewMode === 'year' && scrollViewRef.current) {
      const index = years.indexOf(currentYear);
      if (index !== -1) {
        if (index % 3 === 2) {
          scrollViewRef.current.scrollTo({ y: (parseInt((index / 3).toFixed()) - 3) * 58, animated: false });
        } else {
          scrollViewRef.current.scrollTo({ y: (parseInt((index / 3).toFixed()) - 2) * 58, animated: false });
        }
      }
    }
  }, [viewMode]);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(currentMonth, currentYear);
    }
  }, [currentMonth, currentYear]);

  const handleDayPress = (day: { day: number; isCurrentMonth: boolean } | null) => {
    if (!day || !day.isCurrentMonth) return;

    const dateString = `${currentYear}-${currentMonth + 1}-${day.day}`;

    if (onDayPress) {
      onDayPress(dateString);
    }

    if (markedDates[dateString]) {
      Alert.alert('Szczegóły treningu', `Trening: ${JSON.stringify(markedDates[dateString])}`);
      return;
    }
  };

  const setPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const setNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const matrix = generateCalendarMatrix(currentMonth, currentYear);
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    return (
      <>
        <View style={styles.row}>
          {daysOfWeek.map((day, index) => (
            <View key={index} style={styles.cell}>
              <Typography variant="h5" style={{ color: blue }}>
                {day}
              </Typography>
            </View>
          ))}
        </View>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((day, colIndex) => {
              const dateString = `${currentYear}-${currentMonth + 1}-${day.day}`;
              const isCurrentMonth = day.isCurrentMonth;
              return (
                <TouchableOpacity
                  key={colIndex}
                  style={[
                    styles.cell,
                    isCurrentMonth && markedDates[dateString]
                      ? { backgroundColor: markedDates[dateString].color }
                      : null,
                  ]}
                  onPress={() => handleDayPress(day)}
                >
                  <Typography variant="h4" style={{ color: isCurrentMonth ? backgroundColor : gray }}>
                    {day.day}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </>
    );
  };

  const renderMonths = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
      <View style={styles.monthYearContainer}>
        {months.map((month, index) => (
          <TouchableOpacity
            key={index}
            style={styles.monthCell}
            onPress={() => {
              setCurrentMonth(index);
              setViewMode('day');
            }}
          >
            <Typography variant="h4" style={{ color: backgroundColor }}>
              {month}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderYears = () => {
    return (
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={styles.monthYearContainer}>
          {years.map(year => (
            <TouchableOpacity
              key={year}
              style={styles.yearCell}
              onPress={() => {
                setCurrentYear(year);
                setViewMode('month');
              }}
            >
              <Typography variant="h4" style={{ color: backgroundColor }}>
                {year}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {viewMode === 'day' && (
          <View style={styles.row}>
            <TouchableOpacity onPress={setPrevMonth}>
              <Icon name="caretleft" size={20} color={blue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setViewMode('month')}
              style={{
                width: 160,
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" style={{ color: backgroundColor }}>
                {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={setNextMonth}>
              <Icon name="caretright" size={20} color={blue} />
            </TouchableOpacity>
          </View>
        )}
        {(viewMode === 'month' || viewMode === 'year') && (
          <TouchableOpacity onPress={() => setViewMode('year')}>
            <Typography variant="h3" style={{ color: backgroundColor }}>
              {currentYear}
            </Typography>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.calendarContainer}>
        {viewMode === 'day' && renderCalendar()}
        {viewMode === 'month' && renderMonths()}
        {viewMode === 'year' && renderYears()}
      </View>
    </View>
  );
};

export default Calendar;
