import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { navigate } from '../../../utility/navigate';
import Layout from '../../../components/Layout/Layout';
import styles from './MainScreen.styles';
import { Typography } from '../../../components/Typography/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const MainScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Layout>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('SelectTrainingScreen')} style={[styles.button, styles.startButton]}>
          <Typography variant="h2" style={{}}>
            Start training
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('PlansListScreen')} style={styles.button}>
          <Typography variant="h2" style={styles.buttonText}>
            Plans
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('CalendarScreen');
          }}
          style={styles.button}
        >
          <Typography variant="h2" style={styles.buttonText}>
            History
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('ExerciseAtlasScreen');
          }}
          style={styles.button}
        >
          <Typography variant="h2" style={styles.buttonText}>
            Exercise atlas
          </Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default MainScreen;
