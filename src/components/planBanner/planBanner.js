import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SET_PLAN_TO_EDIT, SET_PLAN_TO_PREVIEW } from '../../store/reducers/planReducer';
import styles from './planBanner.styles';

const PlanBanner = ({ plan, img }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(SET_PLAN_TO_EDIT(plan));
    navigation.navigate('PlanEditScreen');
  };

  const handleDelete = () => {
    console.log('remove' + plan.id);
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
