import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import styles from './PlanDetailsScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { RootState } from '../../../../store/store';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import Carousel from '../../../../components/Carousel/Carousel';
import { navigate } from '../../../../utility/navigate';
import { useDispatch } from '../../../../utility/hooks';
import { EDIT_PLAN } from '../../../planCreator/store/slice/slice';

const PlanDetailsScreen = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.plans.selectedPlan);
  const [items, setItems] = useState<{ id: string; component: React.ReactNode }[]>([]);

  useEffect(() => {
    if (plan != null) {
      const newItems = plan.days.map(day => ({
        id: day.id,
        component: <CarouselItem name={day.name} id={day.id} />,
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
        <View style={styles.buttonsWrapper}>
          <Button onPress={handleEditPress}>
            <Typography variant="h3">Edit</Typography>
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export default PlanDetailsScreen;
