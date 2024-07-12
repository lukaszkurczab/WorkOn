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
import { EDIT_PLAN } from '../../../planCreator/store/slice/slice';
import { RouteProp, useRoute } from '@react-navigation/native';

type PlanDetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlanDetailsScreen'>;

const PlanDetailsScreen = () => {
  const route = useRoute<PlanDetailsScreenRouteProp>();
  if (!route.params || !route.params.plan) {
    return (
      <Layout>
        <Typography variant="h2">No plan data provided.</Typography>
      </Layout>
    );
  }
  const dispatch = useDispatch();
  const editable = route.params.editable ?? true;
  const plan = route.params.plan;
  const [items, setItems] = useState<{ id: string; component: React.ReactNode }[]>([]);

  useEffect(() => {
    if (plan != null) {
      const newItems = plan.days.map((day: Day) => ({
        id: day.id,
        component: <CarouselItem name={day.name} exercises={day.exercises} id={day.id} />,
      }));
      setItems(newItems);
    }
  }, [plan]);

  const handleEditPress = () => {
    dispatch(EDIT_PLAN(plan));
    navigate('ManualCreatorScreen');
  };

  return (
    <Layout headerText={plan ? plan.name : 'WorkOn'}>
      <View style={styles.container}>
        {items.length > 0 && <Carousel items={items} />}
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
