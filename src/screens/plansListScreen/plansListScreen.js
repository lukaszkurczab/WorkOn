import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanBanner from '../../components/planBanner/planBanner';
import styles from './plansListScreen.styles';

const PlansListScreen = () => {
  const plans = useSelector(store => store.user.data.plans);
  const isLoading = useSelector(store => store.user.isLoading);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your plans</Text>
      {!isLoading && (
        <>
          <View>
            {plans.map(plan => (
              <PlanBanner plan={plan} img='test' key={plan.id} />
            ))}
          </View>
          <TouchableOpacity>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={45} style={styles.icon} />
              <Text style={styles.button}>Add</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default PlansListScreen;
