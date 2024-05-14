import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPlans, getUserRecords, getUserHistoryItems } from '../../store/actions/userActions';
import ProfileHeader from '../../components/profileHeader/profileHeader';
import RecordDisplay from '../../components/recordDisplay/recordDisplay';
import WorkoutCard from '../../components/workoutCard/workoutCard';
import PlanCard from '../../components/planCard/planCard';
import Navigation from '../../components/navigation/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './profileScreen.styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.data);
  const userPlans = useSelector(state => state.user.publicPlans);
  const userRecords = useSelector(state => state.user.publicRecords);
  const userHistoryItems = useSelector(state => state.user.publicHistoryItems);
  const maxHistoryItems = useState(5);

  useEffect(() => {
    dispatch(getUserPlans(userData.id));
    dispatch(getUserRecords(userData.id));
    dispatch(getUserHistoryItems(userData.id));
  }, []);

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <Icon name='cog' size={30} style={styles.settingsIcon}></Icon>
          </TouchableOpacity>
          <ProfileHeader name={userData.username} />
          <Text style={styles.title}>Personal records</Text>
          <RecordDisplay records={userRecords} />
          <View style={styles.section}>
            <Text style={styles.title}>Recent workouts</Text>
            {userHistoryItems.map(
              (historyItem, index) =>
                index < maxHistoryItems[0] && (
                  <WorkoutCard
                    workout={{ type: historyItem.name, duration: historyItem.time, exercises: historyItem.exercises.length }}
                    key={historyItem.id}
                  />
                ),
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>My plans</Text>
            <PlanCard plans={userPlans} />
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default ProfileScreen;
