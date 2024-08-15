import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { getAllPlans } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import { useDispatch, useSelector } from '../../../../utility/hooks';

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
                <View key={publicPlan.id}>
                  <Typography variant="h3">{publicPlan.name}</Typography>
                </View>
              ))
            : null}
        </>
      )}
    </View>
  );
};

export default PublicPlans;
