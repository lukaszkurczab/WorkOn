import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import styles from './PlanDetailsScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { Day } from '../../../../types/plans';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import Carousel from '../../../../components/Carousel/Carousel';
import { RootStackParamList, navigate } from '../../../../utility/navigate';
import { useDispatch } from '../../../../utility/hooks';
import { EDIT_PLAN } from '../../../manualCreator/store/slice/slice';
import { RouteProp, useRoute } from '@react-navigation/native';
import PlanSummary from '../../../../components/PlanSummary/PlanSummary';
import Page404 from '../../../../components/Page404/Page404';

type PlanDetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlanDetailsScreen'>;

const PlanDetailsScreen = () => {
  const route = useRoute<PlanDetailsScreenRouteProp>();
  if (!route.params || !route.params.plan) {
    return <Page404 />;
  }
  const dispatch = useDispatch();
  const editable = route.params.editable ?? true;
  const plan = route.params.plan;

  const handleEditPress = () => {
    dispatch(EDIT_PLAN(plan));
    navigate('ManualCreatorScreen');
  };

  return (
    <Layout headerText={plan ? plan.name : 'WorkOn'}>
      <View style={styles.container}>
        <PlanSummary plan={plan} progressionType={plan.progression} />
        {editable && (
          <View style={styles.buttonsWrapper}>
            <Button onPress={handleEditPress}>
              <Typography variant="h3">Edit</Typography>
            </Button>
          </View>
        )}
      </View>
    </Layout>
  );
};

export default PlanDetailsScreen;
