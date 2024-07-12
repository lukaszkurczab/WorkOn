import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PlanTile.style';
import { Typography } from '../../../../components/Typography/Typography';
import { gray, primaryColor } from '../../../../styles/colors';
import { WorkoutPlan } from '../../../../types/plans';

type PlanTileProps = {
  plan: WorkoutPlan;
  handlePreview: (plan: WorkoutPlan) => void;
};

const PlanTile = ({ plan, handlePreview }: PlanTileProps) => {
  return (
    <View key={plan.id} style={styles.listItem}>
      <View>
        <Typography variant="h3">{plan.name}</Typography>
        <Typography variant="h4" style={{ color: gray }}>
          {plan.days.length} days
        </Typography>
      </View>
      <TouchableOpacity onPress={() => handlePreview(plan)}>
        <Icon name="eye" size={24} style={{ color: primaryColor }} />
      </TouchableOpacity>
    </View>
  );
};

export default PlanTile;
