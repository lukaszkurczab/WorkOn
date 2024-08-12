import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './LinearProgression.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { ADD_DAY, CHANGE_DAY_NAME, REMOVE_DAY } from '../../store/slice/slice';
import { RootState } from '../../../../store/store';
import { useDispatch } from '../../../../utility/hooks';
import { TextInput } from '../../../../components/TextInput/TextInput';

interface LinearProgressionProps {
  initDayErrors: { [key: string]: boolean };
}

const LinearProgression = ({ initDayErrors }: LinearProgressionProps) => {
  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.manualCreator.plan);
  const [dayErrors, setDayErrors] = useState<{ [key: string]: boolean }>(initDayErrors);

  const handleDayNameChange = ({ id, name }: { id: string; name: string }) => {
    dispatch(CHANGE_DAY_NAME({ id, name }));
    setDayErrors(prev => ({ ...prev, [id]: false }));
  };

  return (
    <View>
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
      <Button onPress={() => dispatch(ADD_DAY())} style={{ marginTop: 16 }}>
        <Typography variant="h3">+ Add day</Typography>
      </Button>
    </View>
  );
};

export default LinearProgression;
