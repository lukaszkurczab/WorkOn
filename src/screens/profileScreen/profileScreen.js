import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProfileHeader from '../../components/profileHeader/profileHeader';
import RecordDisplay from '../../components/recordDisplay/recordDisplay';
import WorkoutCard from '../../components/workoutCard/workoutCard';
import PlanCard from '../../components/planCard/planCard';
import Navigation from '../../components/navigation/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './profileScreen.styles';

const ProfileScreen = () => {
  const userData = useSelector(state => state.user.data);
  const handlePress = () => {};

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.settingsButton} onPress={handlePress}>
            <Icon name='bars' size={30} style={styles.settingsIcon}></Icon>
          </TouchableOpacity>
          <ProfileHeader name={userData.username} />
          <Text style={styles.title}>Personal records</Text>
          <RecordDisplay
            records={[
              { exercise: 'Bench press', weight: 95 },
              { exercise: 'Squat', weight: 130 },
            ]}
          />
          <View style={styles.section}>
            <Text style={styles.title}>Recent workouts</Text>
            <WorkoutCard workout={{ type: 'Gym workout - chest', duration: '1:23', exercises: 11 }} />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>My plans</Text>
            <PlanCard
              plans={[
                { type: 'Gym workout', frequency: '3 days', level: 'Advanced' },
                { type: 'Home workout', frequency: '2 days', level: 'Intermediate' },
              ]}
            />
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default ProfileScreen;
