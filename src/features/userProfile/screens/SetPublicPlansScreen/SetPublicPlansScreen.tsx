import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './SetPublicPlansScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import { gray, primaryColor } from '../../../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setPublicPlan } from '../../../../api/users';
import { WorkoutPlan } from '../../../../types/plans';
import { useDispatch } from '../../../../utility/hooks';
import { UPDATE_PLANS } from '../../../../store/slice/userSlice';
import { navigate } from '../../../../utility/navigate';

const SetPublicPlansScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [plans, setPlans] = useState<WorkoutPlan[]>([...user.plans]);

  const handleConfirm = async () => {
    const response = await setPublicPlan({ userId: user.id, items: plans });

    if (response.error === null) {
      dispatch(UPDATE_PLANS(plans));
      navigate('SettingsScreen');
    }
  };

  const handleChangePublic = ({ isPublic, planId }: { isPublic: boolean; planId: string }) => {
    const selectedPlanIndex = plans.findIndex(plan => plan.id === planId);

    plans[selectedPlanIndex] = { ...plans[selectedPlanIndex], publicType: isPublic ? 'private' : 'public' };
    setPlans([...plans]);
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Select Plans
        </Typography>
        {plans.map(plan => (
          <View key={plan.id} style={styles.listItem}>
            <View>
              <Typography variant="h3">{plan.name}</Typography>
              <Typography variant="h4" style={{ color: gray }}>
                {plan.days.length} days
              </Typography>
            </View>
            {plan.publicType === 'public' ? (
              <TouchableOpacity onPress={() => handleChangePublic({ isPublic: true, planId: plan.id })}>
                <Icon name="lock" size={24} style={{ color: primaryColor }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleChangePublic({ isPublic: false, planId: plan.id })}>
                <Icon name="unlock" size={24} style={{ color: primaryColor }} />
              </TouchableOpacity>
            )}
          </View>
        ))}
        <Button onPress={handleConfirm}>
          <Typography variant="h3">Confirm</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default SetPublicPlansScreen;
