import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './ManualPlanGeneralScreen.styles';
import { navigate } from '../../../../utility/navigate';
import { useSelector } from 'react-redux';
import { CHANGE_PLAN_NAME, CHANGE_PROGRESSION } from '../../store/slice/slice';
import { RootState } from '../../../../store/store';
import { useDispatch } from '../../../../utility/hooks';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import LinearProgression from '../../components/LinearProgression/LinearProgression';
import WaveProgression from '../../components/WaveProgression/WaveProgression';

const ManualPlanGeneralScreen = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const [nameError, setNameError] = useState(false);
  const [validationDayErrors, setValidationDayErrors] = useState<{ [key: string]: boolean }>({});
  const [progressionError, setProgressionError] = useState(false);

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

    if (!plan.progression) {
      setProgressionError(true);
      valid = false;
    } else {
      setProgressionError(false);
    }

    setValidationDayErrors(newDayErrors);

    if (valid) {
      navigate('ManualCreatorScreen');
    }
  };

  const handlePlanNameChange = (e: string) => {
    dispatch(CHANGE_PLAN_NAME(e));
    setNameError(false);
  };

  const handleProgressionChange = (progression: string) => {
    dispatch(CHANGE_PROGRESSION(progression));
    setProgressionError(false);
  };

  return (
    <Layout showNavigation={false} showHeader={false}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ gap: 16 }} showsVerticalScrollIndicator={false}>
          <View>
            <Typography variant="h2">Name your plan</Typography>
            <TextInput
              value={plan.name}
              onChangeText={e => handlePlanNameChange(e)}
              placeholder="Plan name"
              error={nameError ? 'Plan must have name.' : ''}
            ></TextInput>
          </View>
          <View>
            <Typography variant="h2">Progression type</Typography>
            <Dropdown
              label="Progression type"
              data={['Linear progression', 'Wave progression', 'Periodization']}
              onSelect={handleProgressionChange}
              renderItem={item => <Typography variant="h3">{item}</Typography>}
              error={progressionError ? 'Progression type must be selected.' : ''}
            />
          </View>
          {plan.progression === 'Linear progression' && <LinearProgression initDayErrors={validationDayErrors} />}
          {plan.progression === 'Wave progression' && <WaveProgression initDayErrors={validationDayErrors} />}
        </ScrollView>
        <Button onPress={handleNext}>
          <Typography variant="h2">Next</Typography>
        </Button>
      </View>
    </Layout>
  );
};

export default ManualPlanGeneralScreen;
