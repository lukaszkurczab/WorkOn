import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/header';
import styles from './mainScreen.styles';
import Tile from '../../components/tiles/tile';
import BeginTrainingTile from '../../components/tiles/beginTrainingTile/beginTrainingTile';
import { END_TRAINING } from '../../store/reducers/trainingReducer';
import { useDispatch, useSelector } from 'react-redux';
import CreateNewPlanTile from '../../components/tiles/createNewPlanTile/createNewPlanTile';
import Navigation from '../../components/navigation/navigation';

const MainScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userPlans = useSelector(state => state.user.data.plans);
  const ongoingPlanData = useSelector(state => state.training.ongoingPlanData);
  const lastActivity = useSelector(state => state.training.lastActivity);

  useEffect(() => {
    if (ongoingPlanData && new Date() - new Date(lastActivity) < 30 * 60000) {
      navigation.navigate('WorkoutScreen');
    }
  }, [dispatch, ongoingPlanData, lastActivity, navigation]);

  const handleClearOngoingPlanData = () => {
    dispatch(END_TRAINING());
  };

  const handleContinueTraining = () => {
    navigation.navigate('WorkoutScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <Header />
        {userPlans && userPlans.length > 0 ? <BeginTrainingTile /> : <CreateNewPlanTile />}
        <View style={styles.tilesWrapper}>
          {[
            { text: 'Your plans', icon: 'dumbbell', path: 'PlansListScreen' },
            { text: 'Exercise atlas', icon: 'list-ul', path: 'AtlasScreen' },
            { text: 'History', icon: 'chart-bar', path: 'CalendarScreen' },
          ].map(tile => (
            <Tile key={tile.text} text={tile.text} icon={tile.icon} path={tile.path} version='icon' />
          ))}
        </View>
      </View>
      {ongoingPlanData !== null && (
        <View style={styles.popupWrapper}>
          <View style={styles.wrapper}>
            <Text style={styles.wrapperText}>You have unfinished training. Would you like to continue?</Text>
            <View style={styles.buttonsWrapper}>
              <TouchableOpacity onPress={handleClearOngoingPlanData}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleContinueTraining}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Navigation>
  );
};

export default MainScreen;
