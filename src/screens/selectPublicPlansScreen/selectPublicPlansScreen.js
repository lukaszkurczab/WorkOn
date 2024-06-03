import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navigation from '../../components/navigation/Navigation';
import { updatePublicPlan } from '../../store/actions/userActions';
import styles from './selectPublicPlansScreen.styles';

const SelectPublicPlansScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plans = useSelector(state => state.user.data.plans);
  const userData = useSelector(state => state.user.data);
  const [editedPlans, setEditedPlans] = useState(plans);

  const handleConfirm = () => {
    dispatch(updatePublicPlan({ userId: userData.id, items: editedPlans }));
    navigation.navigate('SettingsScreen');
  };

  const handleChangePublic = id => {
    const newEditedPlans = [...editedPlans];
    const index = newEditedPlans.findIndex(plan => plan.id === id);
    newEditedPlans[index] = { ...newEditedPlans[index], public: !newEditedPlans[index].public };
    setEditedPlans(newEditedPlans);
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Select Plans</Text>
          {editedPlans.map(plan => (
            <View key={plan.id} style={styles.tileWrapper}>
              <View style={styles.card}>
                <View style={styles.info}>
                  <Text style={styles.type}>{plan.name}</Text>
                  <Text style={styles.details}>
                    {plan.days.length} days : {plan.level}
                  </Text>
                </View>
                <Image source={require('../../assets/articles_gym.jpg')} style={styles.image} />
              </View>
              <TouchableOpacity style={styles.publicButtonWrapper} onPress={() => handleChangePublic(plan.id)}>
                {plan.public ? (
                  <Icon name="eye" size={30} style={styles.settingsIcon} />
                ) : (
                  <Icon name="eye-slash" size={30} style={styles.settingsIcon} />
                )}
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SelectPublicPlansScreen;
