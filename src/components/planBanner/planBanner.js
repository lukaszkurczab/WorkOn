import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SET_PLAN_TO_EDIT, SET_PLAN_TO_PREVIEW } from '../../store/reducers/planReducer';
import { removePlan } from '../../store/slice/userSlice';
import styles from './planBanner.styles';

const PlanBanner = ({ plan, img }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(store => store.user.data.id);

  const handleEdit = () => {
    dispatch(SET_PLAN_TO_EDIT(plan));
    navigation.navigate('PlanEditScreen');
  };

  const handleDelete = () => {
    const data = {
      userId: userId,
      planId: plan.id,
    };
    dispatch(removePlan(data));
  };

  const handelBannerPress = () => {
    dispatch(SET_PLAN_TO_PREVIEW(plan));
    navigation.navigate('PlanTableScreen');
  };

  return (
    <TouchableOpacity onPress={handelBannerPress}>
      <View style={styles.container}>
        <Image source={require('../../assets/planImg.jpg')} style={styles.image} />
        <Text style={styles.text}>{plan.name}</Text>
        <TouchableOpacity onPress={handleEdit}>
          <Icon name='edit' size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name='trash' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PlanBanner;
