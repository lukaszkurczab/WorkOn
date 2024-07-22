import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Layout from '../../../../components/Layout/Layout';
import PlanListItem from '../../components/PlanListItem/PlanListItem';
import styles from './PlansListScreen.styles';
import { RootState } from '../../../../store/store';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import { navigate } from '../../../../utility/navigate';
import { WorkoutPlan } from '../../../../types/plans';
import { useDispatch } from '../../../../utility/hooks';
import { removePlan } from '../../store/actions/actions';
import { EDIT_PLAN } from '../../../manualCreator/store/slice/slice';

const PlansListScreen = () => {
  const dispatch = useDispatch();
  const plans = useSelector((state: RootState) => state.user.plans);
  const userId = useSelector((state: RootState) => state.user.id);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleAddPlan = () => {
    navigate('CarouselScreen');
  };

  const handleEditPlan = (plan: WorkoutPlan) => {
    dispatch(EDIT_PLAN(plan));
    navigate('ManualCreatorScreen');
  };

  const handleDeletePlan = (planId: string) => {
    dispatch(removePlan({ userId, planId }));
  };

  const handleMenuToggle = (planId: string) => {
    setActiveMenu(activeMenu === planId ? null : planId);
  };

  const handleOutsidePress = () => {
    setActiveMenu(null);
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View>
          {plans.map(plan => (
            <PlanListItem
              plan={plan}
              key={plan.id}
              onEdit={() => handleEditPlan(plan)}
              onDelete={() => handleDeletePlan(plan.id)}
              isActive={activeMenu === plan.id}
              onMenuToggle={() => handleMenuToggle(plan.id)}
              onOutsidePress={handleOutsidePress}
            />
          ))}
        </View>
        <Button style={{ marginTop: 16 }} onPress={handleAddPlan}>
          <Typography variant="h2">Create new</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default PlansListScreen;
