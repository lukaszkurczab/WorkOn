import React from 'react';
import { View } from 'react-native';
import Carousel from '../../../../components/Carousel/Carousel';
import PlanCarouselItem from '../PlanCarouselItem/PlanCarouelItem';
import styles from './PlanCarousel.styles';
import { useDispatch } from 'react-redux';
import { REMOVE_DAY } from '../../store/slice/slice';
import { WorkoutPlan } from '../../../../types/plans';

const CarouselScreen = ({ plan }: { plan: WorkoutPlan }) => {
  const dispatch = useDispatch();

  const handleRemoveDay = (dayId: string) => {
    dispatch(REMOVE_DAY(dayId));
  };

  const items: {
    id: string;
    component: React.ReactNode;
  }[] = [];

  plan.days.map((day, index) =>
    items.push({
      id: day.id,
      component: <PlanCarouselItem name={day.name} id={day.id} onRemoveDay={handleRemoveDay} />,
    })
  );

  return (
    <View style={styles.container}>
      <Carousel items={items} />
    </View>
  );
};

export default CarouselScreen;
