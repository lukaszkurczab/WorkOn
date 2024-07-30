import React from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './ManualCreatorScreen.styles';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { createPlan } from '../../store/actions/actions';
import { RootState } from '../../../../store/store';
import Carousel from '../../components/Carousel/Carousel';
import { useDispatch } from '../../../../utility/hooks';

const ManualCreatorScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const plan = useSelector((state: RootState) => state.manualCreator.plan);

  const handleSave = () => {
    dispatch(createPlan({ userId, newPlan: plan }));
  };

  return (
    <Layout showNavigation={false}>
      <View style={styles.container}>
        <Carousel plan={plan} />
        <Button onPress={handleSave}>
          <Typography variant="h2">Save</Typography>
        </Button>
      </View>
    </Layout>
  );
};

export default ManualCreatorScreen;
