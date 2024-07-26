import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from '../../../../components/Carousel/Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import styles from './Carousel.styles';
import { WorkoutPlan } from '../../../../types/plans';

const { height: screenHeight } = Dimensions.get('window');

const CarouselScreen = ({ plan }: { plan: WorkoutPlan }) => {
  const items: {
    id: string;
    component: React.ReactNode;
  }[] = [];

  plan.days.map(day =>
    items.push({
      id: day.id,
      component: <CarouselItem day={day} />,
    })
  );

  return (
    <View style={styles.container}>
      <Carousel items={items} height={screenHeight - 300} />
    </View>
  );
};

export default CarouselScreen;
