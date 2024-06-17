import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Button from '../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CHANGE_PLAN_NAME, CHANGE_DAY_NAME, REMOVE_DAY, ADD_DAY } from '../../store/slice/slice';
import styles from './PlanGeneral.styles';

const PlanGeneral = () => {
  const dispatch = useDispatch();
  const newPlan = useSelector((state: RootState) => state.planCreator.newPlan);
  const days = useSelector((state: RootState) => state.planCreator.newPlan.days);
  const error = useSelector((state: RootState) => state.planCreator.error);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Typography variant="h2">Name your plan</Typography>
        <TextInput
          value={newPlan.name}
          onChangeText={e => dispatch(CHANGE_PLAN_NAME(e))}
          placeholder="Plan name"
          error={error === 'Plan must have name.' ? 'Plan must have name.' : ''}
        ></TextInput>
      </View>
      <View style={styles.daysList}>
        <Typography variant="h2">Create training days</Typography>

        {days.map(day => (
          <TextInput
            key={day.id}
            value={day.name}
            onChangeText={e => dispatch(CHANGE_DAY_NAME({ id: day.id, name: e }))}
            placeholder="Day name"
            error={error === 'Day must have name.' && day.name === '' ? 'Day must have name.' : ''}
            rightComponent={
              days.length > 1 && (
                <TouchableOpacity onPress={() => dispatch(REMOVE_DAY(day.id))}>
                  <Icon name="trash" size={32} style={styles.icon} />
                </TouchableOpacity>
              )
            }
          ></TextInput>
        ))}
      </View>
      <Button onPress={() => dispatch(ADD_DAY())}>
        <Typography variant="h3">+ Add day</Typography>
      </Button>
    </ScrollView>
  );
};

export default PlanGeneral;
