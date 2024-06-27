import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from '../../../../utility/hooks';
import { WorkoutPlan } from '../../../../types/plans';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './PlanListItem.styles';
import { SELECT_PLAN } from '../../store/slice/slice';
import { navigate } from '../../../../utility/navigate';

type PlanListItemProps = {
  plan: WorkoutPlan;
};

const PlanListItem = ({ plan }: PlanListItemProps) => {
  const dispatch = useDispatch();

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handelSelectPlan = (plan: WorkoutPlan) => {
    dispatch(SELECT_PLAN(plan));
    navigate('PlanDetailsScreen');
  };

  return (
    <TouchableOpacity onPress={() => handelSelectPlan(plan)}>
      <View style={styles.container}>
        <Typography variant="h3">{plan.name}</Typography>
        <Typography variant="h4" style={styles.text}>
          {plan.days.length} days
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default PlanListItem;
