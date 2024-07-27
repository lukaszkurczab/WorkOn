import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from '../../../../components/Carousel/Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import styles from './Carousel.styles';
import { WorkoutPlan } from '../../../../types/plans';

const { height: screenHeight } = Dimensions.get('window');

interface CarouselScreenProps {
  plan: WorkoutPlan;
}

const CarouselScreen = ({ plan }: CarouselScreenProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const items: {
    id: string;
    component: React.ReactNode;
  }[] = [];

  const handleSetSelectedIndex = (newIndex: 'prev' | 'next') => {
    const newSelectedIndex = newIndex === 'prev' ? selectedIndex - 1 : selectedIndex + 1;
    if (newSelectedIndex >= 0 && newSelectedIndex < plan.days.length) {
      setSelectedIndex(newSelectedIndex);
    }
  };

  plan.days.map(day =>
    items.push({
      id: day.id,
      component: <CarouselItem day={day} handleSetIndex={handleSetSelectedIndex} />,
    })
  );

  return (
    <View style={styles.container}>
      <Carousel items={items} height={screenHeight - 300} selectedIndex={selectedIndex} />
    </View>
  );
};

export default CarouselScreen;
