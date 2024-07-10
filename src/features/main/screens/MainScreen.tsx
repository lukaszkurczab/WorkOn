import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Layout from '../../../components/Layout/Layout';
import styles from './MainScreen.styles';
import { Typography } from '../../../components/Typography/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import MenuButton from '../components/MenuButton';

const MainScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const hasPlans = user.plans.length > 0;

  return (
    <Layout>
      <View style={styles.container}>
        <MenuButton
          screenToNavigate={hasPlans ? 'SelectTrainingScreen' : 'CarouselScreen'}
          text={hasPlans ? 'Start training' : 'Create first plan'}
          style={styles.startButton}
        />
        <MenuButton screenToNavigate="PlansListScreen" text="Plans" />
        <MenuButton screenToNavigate="CalendarScreen" text="History" />
        <MenuButton screenToNavigate="ExerciseAtlasScreen" text="Exercise atlas" />
      </View>
    </Layout>
  );
};

export default MainScreen;
