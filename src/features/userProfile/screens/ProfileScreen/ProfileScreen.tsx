import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { gray, primaryColor } from '../../../../styles/colors';
import { WorkoutPlan } from '../../../../types/plans';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  const handleSettings = () => {
    navigate('SettingsScreen');
  };

  const previewPlan = (plan: WorkoutPlan) => {
    navigate('PlanDetailsScreen', { plan: plan, editable: false });
  };

  return (
    <Layout showHeader={false}>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
          <Icon name="cog" size={30} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.contentWrapper}>
          <View style={styles.userDataWrapper}>
            <View style={styles.userPhotoWrapper}>
              <Icon name="user" size={64} style={styles.userPhoto} />
            </View>
            <Typography variant="h3">{user.username}</Typography>
          </View>
          <Typography variant="h2">Public plans</Typography>
          {user.plans.map(plan => (
            <View key={plan.id} style={styles.listItem}>
              <View>
                <Typography variant="h3">{plan.name}</Typography>
                <Typography variant="h4" style={{ color: gray }}>
                  {plan.days.length} days
                </Typography>
              </View>
              <TouchableOpacity onPress={() => previewPlan(plan)}>
                <Icon name="eye" size={24} style={{ color: primaryColor }} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;
