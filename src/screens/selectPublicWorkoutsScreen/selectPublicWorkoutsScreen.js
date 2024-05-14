import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navigation from '../../components/navigation/navigation';
import LastTrainingListItem from '../../components/lastTrainingList/lastTrainingListItem/lastTrainingListItem';
import styles from './selectPublicWorkoutsScreen.styles';

const SelectPublicWorkoutsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.user.data.history);
  const [editedWorkouts, setEditedWorkouts] = useState(workouts);

  const handleChangePublic = id => {
    const newEditedWorkouts = [...editedWorkouts];
    const index = newEditedWorkouts.findIndex(workout => workout.id === id);
    newEditedWorkouts[index] = { ...newEditedWorkouts[index], public: !newEditedWorkouts[index].public };
    setEditedWorkouts(newEditedWorkouts);
  };

  const handleConfirm = () => {
    console.log(editedWorkouts);
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Select workouts</Text>
          <View>
            {editedWorkouts.map(day => (
              <View key={day.id} style={styles.tileWrapper}>
                <LastTrainingListItem day={day} />
                <TouchableOpacity style={styles.publicButtonWrapper} onPress={() => handleChangePublic(day.id)}>
                  {day.public ? (
                    <Icon name='eye' size={30} style={styles.settingsIcon} />
                  ) : (
                    <Icon name='eye-slash' size={30} style={styles.settingsIcon} />
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SelectPublicWorkoutsScreen;
