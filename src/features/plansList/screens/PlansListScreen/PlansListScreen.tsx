import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Layout from '../../../../components/Layout/Layout';
import PlanListItem from '../../components/PlanListItem/PlanListItem';
import styles from './PlansListScreen.styles';
import { RootState } from '../../../../store/store';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import { navigate } from '../../../../utility/navigate';

const PlansListScreen = () => {
  const plans = useSelector((state: RootState) => state.user.plans);

  const handleAddPlan = () => {
    navigate('CarouselScreen');
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View>
          {plans.map(plan => (
            <PlanListItem plan={plan} key={plan.id} />
          ))}
        </View>
        <Button style={{ marginTop: 16 }} onPress={handleAddPlan}>
          <Typography variant="h2">Create new</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default PlansListScreen;
