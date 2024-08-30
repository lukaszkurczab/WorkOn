import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { getAllPlans } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import { useDispatch, useSelector } from '../../../../utility/hooks';
import PlanListItem from '../PlanListItem/PlanListItem';
import { WorkoutPlan } from '../../../../types/plans';
import { IMPORT_PLAN } from '../../../manualCreator/store/slice/slice';
import { navigate } from '../../../../utility/navigate';

const PublicPlans: React.FC = () => {
  const dispatch = useDispatch();
  const { publicPlans, loading } = useSelector((state: RootState) => state.plans);
  const userId = useSelector((state: RootState) => state.user.id);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAllPlans({}));
  }, [dispatch]);

  const handleMenuToggle = (planId: string) => {
    setActiveMenu(activeMenu === planId ? null : planId);
  };

  const handleOutsidePress = () => {
    setActiveMenu(null);
  };

  const handleImport = (plan: WorkoutPlan) => {
    dispatch(IMPORT_PLAN({ userId, plan }));
    navigate('ManualPlanGeneralScreen');
  };

  return (
    <View>
      <Typography variant="h3">Public Plans</Typography>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {publicPlans && publicPlans.length > 0
            ? publicPlans.map(publicPlan => (
                <PlanListItem
                  key={publicPlan.id}
                  variant="public"
                  plan={publicPlan}
                  isActive={activeMenu === publicPlan.id}
                  onMenuToggle={() => handleMenuToggle(publicPlan.id)}
                  onOutsidePress={handleOutsidePress}
                  onImport={handleImport}
                />
              ))
            : null}
        </>
      )}
    </View>
  );
};

export default PublicPlans;
