import React from 'react';
import { View } from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import styles from './CalendarScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';

const CalendarScreen = () => {
  const userHistory = useSelector((state: RootState) => state.user.history);

  return (
    <Layout>
      <View style={styles.container}>
        <Calendar />
      </View>
    </Layout>
  );
};

export default CalendarScreen;
