import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { WorkoutPlan } from '../../../../types/plans';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './PlanListItem.styles';
import { navigate } from '../../../../utility/navigate';
import Icon from 'react-native-vector-icons/FontAwesome';

type PlanListItemProps = {
  plan: WorkoutPlan;
  onEdit: () => void;
  onDelete: () => void;
  isActive: boolean;
  onMenuToggle: () => void;
  onOutsidePress: () => void;
};

const PlanListItem = ({ plan, onEdit, onDelete, isActive, onMenuToggle, onOutsidePress }: PlanListItemProps) => {
  const menuRef = useRef(null);

  const handleEdit = () => {
    onMenuToggle();
    onEdit();
  };

  const handleDelete = () => {
    onMenuToggle();
    onDelete();
  };

  const handleSelectPlan = (plan: WorkoutPlan) => {
    navigate('PlanDetailsScreen', { plan: plan, editable: true });
  };

  return (
    <TouchableWithoutFeedback onPress={onOutsidePress}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleSelectPlan(plan)} style={{ flex: 1 }}>
          <View>
            <Typography variant="h3">{plan.name}</Typography>
            <Typography variant="h4" style={styles.text}>
              {plan.days.length} days
            </Typography>
          </View>
        </TouchableOpacity>
        <View style={{ position: 'relative' }}>
          <TouchableOpacity style={styles.iconWrapper} onPress={onMenuToggle}>
            <Icon name="ellipsis-v" size={24} style={styles.icon} />
          </TouchableOpacity>
          {isActive && (
            <View ref={menuRef} style={styles.dropdownMenu}>
              <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.menuItem}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.menuItem}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlanListItem;
