import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './PlanTile.style';
import { Typography } from '../Typography/Typography';
import { gray } from '../../styles/colors';
import { WorkoutPlan } from '../../types/plans';

type PlanTileProps = {
  plan: WorkoutPlan;
  handlePreview: (plan: WorkoutPlan) => void;
};

const PlanTile = ({ plan, handlePreview }: PlanTileProps) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => handlePreview(plan)}>
      <Typography variant="h3">{plan.name}</Typography>
      <Typography variant="h4" style={{ color: gray }}>
        {plan.days.length} days
      </Typography>
    </TouchableOpacity>
  );
};

export default PlanTile;
