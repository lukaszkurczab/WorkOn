import React from 'react';
import { View, Text } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import Carousel from '../../../../components/Carousel/Carousel';

const CustomComponent1 = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>Manual creator</Text>
    <Text>
      Choose exercises from our database and create your own training plan. In this mode you have full control over what
      the plan will look like. We recommend this mode for more experienced users.
    </Text>
  </View>
);
const CustomComponent2 = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>AI Creator</Text>
    <Text>
      Choose exercises from our database and create your own training plan. In this mode you have full control over what
      the plan will look like. We recommend this mode for more experienced users.
    </Text>
  </View>
);
const CustomComponent3 = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>Import plan</Text>
    <Text>
      Choose exercises from our database and create your own training plan. In this mode you have full control over what
      the plan will look like. We recommend this mode for more experienced users.
    </Text>
  </View>
);

const items = [
  {
    id: 'item-1',
    component: <CustomComponent1 />,
  },
  {
    id: 'item-2',
    component: <CustomComponent2 />,
  },
  {
    id: 'item-3',
    component: <CustomComponent3 />,
  },
];

const CarouselScreen = () => {
  return (
    <Layout scrollable={false}>
      <View>
        <Carousel items={items} />
      </View>
    </Layout>
  );
};

export default CarouselScreen;
