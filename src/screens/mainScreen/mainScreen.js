import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/header';
import styles from './mainScreen.styles';
import Tile from '../../components/tiles/tile';
import BeginTrainingTile from '../../components/tiles/beginTrainingTile/beginTrainingTile';
import { getExercises } from '../../store/slice/exercisesSlice';
import { END_TRAINING } from '../../store/reducers/trainingReducer';
import { useDispatch, useSelector } from 'react-redux';
import CreateNewPlanTile from '../../components/tiles/createNewPlanTile/createNewPlanTile';
import Navigation from '../../components/navigation/navigation';

const MainScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dataLoaded = useSelector(store => !store.user.isLoading);
  const userPlans = useSelector(store => store.user.data.plans);
  const ongoingPlanData = useSelector(store => store.training.ongoingPlanData);

  useEffect(() => {
    dispatch(getExercises('1.0'));
  }, []);

  const handleClearOngoingPlanData = () => {
    dispatch(END_TRAINING());
  };

  const handleContinueTraining = () => {
    navigation.navigate('WorkoutScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        {dataLoaded && (
          <>
            <Header />
            {userPlans && userPlans.length > 0 ? <BeginTrainingTile /> : <CreateNewPlanTile />}
            <View style={styles.tilesWrapper}>
              <Tile text='Your plans' icon='dumbbell' path='PlansListScreen' version='icon'></Tile>
              <Tile text='Exercise atlas' icon='list-ul' path='AtlasScreen' version='icon'></Tile>
              <Tile text='History' icon='chart-bar' path='CalendarScreen' version='icon'></Tile>
              <Tile text='Articles' icon='book' path='ArticlesSelectScreen' version='icon'></Tile>
            </View>
          </>
        )}
      </View>
      {ongoingPlanData !== null && (
        <View style={styles.popupWrapper}>
          <View style={styles.wrapper}>
            <Text style={styles.wrapperText}>You have unfinished training. Would you like to continue?</Text>
            <View style={styles.buttonsWrapper}>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={handleClearOngoingPlanData}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={handleContinueTraining}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </Navigation>
  );
};

export default MainScreen;
