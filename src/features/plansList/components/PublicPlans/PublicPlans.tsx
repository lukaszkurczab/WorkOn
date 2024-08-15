import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { getAllPlans } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import { useDispatch, useSelector } from '../../../../utility/hooks';
import PlanListItem from '../PlanListItem/PlanListItem';

const PublicPlans: React.FC = () => {
  const dispatch = useDispatch();
  const { publicPlans, loading } = useSelector((state: RootState) => state.plans);

  useEffect(() => {
    dispatch(getAllPlans({}));
  }, [dispatch]);

  return (
    <View>
      <Typography variant="h3">Public Plans</Typography>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {publicPlans && publicPlans.length > 0
            ? publicPlans.map(publicPlan => (
                <PlanListItem key={publicPlan.id} variant="public" plan={publicPlan}></PlanListItem>
              ))
            : null}
        </>
      )}
    </View>
  );
};

export default PublicPlans;
