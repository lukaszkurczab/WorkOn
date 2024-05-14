import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SET_PLAN_TO_PREVIEW } from '../../store/reducers/planReducer';
import styles from './planCard.styles';

const PlanCard = ({ plans }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handelBannerPress = plan => {
    dispatch(SET_PLAN_TO_PREVIEW(plan));
    navigation.navigate('PlanDetailsScreen');
  };

  return (
    <View style={styles.container}>
      {plans.map(plan => (
        <TouchableOpacity key={plan.id} style={styles.card} onPress={() => handelBannerPress(plan)}>
          <View style={styles.info}>
            <Text style={styles.type}>{plan.name}</Text>
            <Text style={styles.details}>
              {plan.days.length} days : {plan.level}
            </Text>
          </View>
          <Image source={require('../../assets/articles_gym.jpg')} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PlanCard;
