import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './ManualPlanGeneralScreen.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { ADD_DAY, CHANGE_DAY_NAME, CHANGE_PLAN_NAME, REMOVE_DAY } from '../../store/slice/slice';
import { RootState } from '../../../../store/store';
import { useDispatch } from '../../../../utility/hooks';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Dropdown from '../../../../components/Dropdown/Dropdown';

const ManualPlanGeneralScreen = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const [nameError, setNameError] = useState(false);
  const [dayErrors, setDayErrors] = useState<{ [key: string]: boolean }>({});

  const handleNext = () => {
    let valid = true;
    const newDayErrors: { [key: string]: boolean } = {};
    plan.days.forEach(day => {
      if (day.name === '') {
        newDayErrors[day.id] = true;
        valid = false;
      } else {
        newDayErrors[day.id] = false;
      }
    });

    if (plan.name === '') {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    setDayErrors(newDayErrors);

    if (valid) {
      navigate('ManualCreatorScreen');
    }
  };

  const handlePlanNameChange = (e: string) => {
    dispatch(CHANGE_PLAN_NAME(e));
    setNameError(false);
  };

  const handleDayNameChange = ({ id, name }: { id: string; name: string }) => {
    dispatch(CHANGE_DAY_NAME({ id, name }));
    setDayErrors(prev => ({ ...prev, [id]: false }));
  };

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <View>
          <Typography variant="h2">Name your plan</Typography>
          <TextInput
            value={plan.name}
            onChangeText={e => handlePlanNameChange(e)}
            placeholder="Plan name"
            error={nameError ? 'Plan must have name.' : ''}
          ></TextInput>
        </View>
        <View style={styles.daysList}>
          <Typography variant="h2">Create training days</Typography>
          {plan.days.map(day => (
            <TextInput
              key={day.id}
              value={day.name}
              onChangeText={e => handleDayNameChange({ id: day.id, name: e })}
              placeholder="Day name"
              error={dayErrors[day.id] ? 'Day must have name.' : ''}
              rightComponent={
                plan.days.length > 1 && (
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
        <View>
          <Typography variant="h2">Progrss type</Typography>
          <Dropdown
            label="Progress type"
            data={['Linear progression', 'Wave progression', 'Volume progression', 'Periodization']}
            onSelect={item => {
              console.log(item);
            }}
            renderItem={item => <Typography variant="h3">{item}</Typography>}
          />
        </View>
        <Button onPress={handleNext}>
          <Typography variant="h2">Next</Typography>
        </Button>
      </View>
    </Layout>
  );
};

export default ManualPlanGeneralScreen;
