import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanTable from '../../components/planTable/planTable';
import { SET_PLAN_TO_EDIT } from '../../store/reducers/planReducer';
import { removePlan } from '../../store/slice/userSlice';
import styles from './planTableScreen.styles';

const PlanTableScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plan = useSelector(store => store.plans.planToPreview);
  const userId = useSelector(store => store.user.data.id);

  const handleEditPress = () => {
    dispatch(SET_PLAN_TO_EDIT(plan));
    navigation.navigate('PlanEditScreen');
  };

  const handleRemovePress = () => {
    dispatch(removePlan(userId, plan.id));
    navigation.navigate('PlanEditScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plan.name}</Text>
      <ScrollView>
        {plan.days.map(day =>
          !day.restDay ? (
            <View key={day.name}>
              <Text style={styles.heading}>{day.name}</Text>
              <PlanTable exercises={day.exercises} />
            </View>
          ) : null,
        )}
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={handleEditPress}>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={40} style={styles.icon} />
              <Text style={styles.button}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemovePress}>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={40} style={styles.icon} />
              <Text style={styles.button}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanTableScreen;
