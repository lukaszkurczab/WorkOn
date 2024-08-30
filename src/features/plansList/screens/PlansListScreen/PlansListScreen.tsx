import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import styles from './PlansListScreen.styles';
import { ScrollView } from 'react-native-gesture-handler';
import UserPlans from '../../components/UserPlans/UserPlans';
import PublicPlans from '../../components/PublicPlans/PublicPlans';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../utility/navigate';

type PlansListScreenRouteProp = RouteProp<RootStackParamList, 'PlansListScreen'>;

const PlansListScreen = () => {
  const route = useRoute<PlansListScreenRouteProp>();
  const showNavigation = route.params ? route.params.showNavigation : true;

  const [view, setView] = useState(route.params ? route.params.startTab : 'user');

  useEffect(() => {
    route.params && setView(route.params.startTab);
  }, [route.params]);

  return (
    <Layout showHeader={false}>
      {showNavigation && (
        <View style={styles.buttonContainer}>
          <Button onPress={() => setView('user')} style={[styles.button, view === 'user' ? styles.selected : null]}>
            <Typography variant="h4">User Plans</Typography>
          </Button>
          <Button onPress={() => setView('public')} style={[styles.button, view === 'public' ? styles.selected : null]}>
            <Typography variant="h4">Public Plans</Typography>
          </Button>
        </View>
      )}
      <ScrollView style={styles.container}>{view === 'user' ? <UserPlans /> : <PublicPlans />}</ScrollView>
    </Layout>
  );
};

export default PlansListScreen;
