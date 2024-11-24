import React from 'react';
import { View, NativeModules } from 'react-native';
import Layout from '../../../components/Layout/Layout';
import styles from './MainScreen.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import MenuButton from '../components/MenuButton';

const { Training } = NativeModules;

const MainScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const hasPlans = user.plans.length > 0;

  return (
    <Layout>
      <View style={styles.container}>
        <MenuButton
          screenToNavigate={hasPlans ? 'SelectTrainingScreen' : 'CarouselScreen'}
          text={hasPlans ? 'Start training' : 'Create first plan'}
        />
        <MenuButton screenToNavigate="PlansListScreen" text="Plans" style={styles.button} />
        <MenuButton screenToNavigate="CalendarScreen" text="History" style={styles.button} />
        <MenuButton screenToNavigate="ExerciseAtlasScreen" text="Exercise atlas" style={styles.button} />
      </View>
    </Layout>
  );
};

export default MainScreen;
