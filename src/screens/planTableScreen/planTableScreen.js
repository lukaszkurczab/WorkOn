import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanTable from '../../components/planTable/planTable';
import styles from './planTableScreen.styles';

const PlanTableScreen = () => {
  const plan = useSelector(store => store.plans.planToPreview);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plan.name}</Text>
      <ScrollView>
        {plan.days.map(day =>
          !day.restDay ? (
            <View key={day.name}>
              <Text style={styles.heading}>{day.name}</Text>
              <PlanTable exercises={day.exercises} />
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity>
                  <View style={styles.buttonWrapper}>
                    <Icon name='plus' size={40} style={styles.icon} />
                    <Text style={styles.button}>Edit</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.buttonWrapper}>
                    <Icon name='plus' size={40} style={styles.icon} />
                    <Text style={styles.button}>Remove</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

export default PlanTableScreen;
