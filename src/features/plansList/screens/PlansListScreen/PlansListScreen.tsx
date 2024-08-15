import React, { useState } from 'react';
import { View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import styles from './PlansListScreen.styles';
import { ScrollView } from 'react-native-gesture-handler';
import UserPlans from '../../components/UserPlans/UserPlans';
import PublicPlans from '../../components/PublicPlans/PublicPlans';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

const PlansListScreen = () => {
  const [view, setView] = useState('user');

  return (
    <Layout showHeader={false}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => setView('user')} style={[styles.button, view === 'user' ? styles.selected : null]}>
          <Typography variant="h4">User Plans</Typography>
        </Button>
        <Button onPress={() => setView('public')} style={[styles.button, view === 'public' ? styles.selected : null]}>
          <Typography variant="h4">Public Plans</Typography>
        </Button>
      </View>
      <ScrollView style={styles.container}>{view === 'user' ? <UserPlans /> : <PublicPlans />}</ScrollView>
    </Layout>
  );
};

export default PlansListScreen;
