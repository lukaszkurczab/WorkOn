import React from 'react';
import { View } from 'react-native';
import Carousel from '../../../../components/Carousel/Carousel';
import PlanCarouselItem from '../PlanCarouselItem/PlanCarouelItem';
import styles from './PlanCarousel.styles';
import { WorkoutPlan } from '../../../../types/plans';

const CarouselScreen = ({ plan }: { plan: WorkoutPlan }) => {
  const items: {
    id: string;
    component: React.ReactNode;
  }[] = [];

  plan.days.map(day =>
    items.push({
      id: day.id,
      component: <PlanCarouselItem name={day.name} id={day.id} />,
    })
  );

  return (
    <View style={styles.container}>
      <Carousel items={items} />
    </View>
  );
};

export default CarouselScreen;
