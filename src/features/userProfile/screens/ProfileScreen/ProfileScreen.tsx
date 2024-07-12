import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { gray } from '../../../../styles/colors';
import { WorkoutPlan } from '../../../../types/plans';
import { HistoryItem } from '../../../../types/history';
import { useFormatDate } from '../../../../utility/hooks';
import PlanTile from '../../components/PlanTile/PlanTile';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  const handleSettings = () => {
    navigate('SettingsScreen');
  };

  const previewPlan = (plan: WorkoutPlan) => {
    console.log(plan);
    navigate('PlanDetailsScreen', { plan: plan, editable: false });
  };

  const handlePreviewTraining = (training: HistoryItem) => {
    navigate('WorkoutSummaryScreen', { workout: training, previousScreen: 'ProfileScreen' });
  };

  return (
    <Layout showHeader={false}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
          <Typography variant="h2">Plans</Typography>
          {user.plans.map((plan: WorkoutPlan) => (
            <PlanTile plan={plan} handlePreview={previewPlan} />
          ))}
          <Typography variant="h2">History</Typography>
          {user.history.map((historyItem: HistoryItem) => (
            <TouchableOpacity
              onPress={() => handlePreviewTraining(historyItem)}
              style={styles.historyItem}
              key={historyItem.id}
            >
              <Typography variant="h3">
                {historyItem.plan} - {historyItem.day}
              </Typography>
              <Typography variant="h4" style={{ color: gray }}>
                {historyItem.exercises.length} exercises · {useFormatDate(historyItem.date)}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;
