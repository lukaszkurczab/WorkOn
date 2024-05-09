import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './planCard.styles';

const PlanCard = ({ plans }) => {
  return (
    <View style={styles.container}>
      {plans.map((plan, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.type}>{plan.type}</Text>
            <Text style={styles.details}>
              {plan.frequency} : {plan.level}
            </Text>
          </View>
          <Image source={require('../../assets/articles_gym.jpg')} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

export default PlanCard;
