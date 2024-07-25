import React from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './UserPublicProfileScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { WorkoutPlan } from '../../../../types/plans';
import { HistoryItem } from '../../../../types/history';
import PlanTile from '../../../../components/PlanTile/PlanTile';
import HistoryTile from '../../../../components/HistoryTile/HistoryTile';

const UserPublicProfileScreen = () => {
  const user = useSelector((state: RootState) => state.usersSearch.selectedUser);

  const previewPlan = (plan: WorkoutPlan) => {
    navigate('PlanDetailsScreen', { plan: plan, editable: false });
  };

  const handlePreviewTraining = (training: HistoryItem) => {
    navigate('WorkoutSummaryScreen', { workout: training, previousScreen: 'ProfileScreen' });
  };

  return (
    <Layout showHeader={false}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.userDataWrapper}>
            <View style={styles.userPhotoWrapper}>
              <Icon name="user" size={64} style={styles.userPhoto} />
            </View>
            <Typography variant="h3">{user.username}</Typography>
          </View>
          <Typography variant="h2">Plans</Typography>
          {user.plans.map((plan: WorkoutPlan) => (
            <PlanTile plan={plan} handlePreview={previewPlan} key={plan.id} />
          ))}
          <Typography variant="h2">History</Typography>
          {user.history.map((historyItem: HistoryItem) => (
            <HistoryTile key={historyItem.id} historyItem={historyItem} handlePreview={handlePreviewTraining} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default UserPublicProfileScreen;
