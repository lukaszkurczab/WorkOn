import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './WaveProgression.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import {
  ADD_DAY,
  ADD_WAVE,
  ASSIGN_DAY_TO_WAVE,
  CHANGE_DAY_NAME,
  CHANGE_WAVE_NAME,
  REMOVE_DAY,
  REMOVE_WAVE,
} from '../../store/slice/slice';
import { RootState } from '../../../../store/store';
import { useDispatch } from '../../../../utility/hooks';
import { TextInput } from '../../../../components/TextInput/TextInput';

interface WaveProgressionProps {
  initDayErrors: { [key: string]: boolean };
}

const WaveProgression = ({ initDayErrors }: WaveProgressionProps) => {
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
        <Typography variant="h2">Create waves</Typography>
        {plan.waves.map(wave => (
          <View key={wave.id} style={styles.waveContainer}>
            <TextInput
              value={wave.name}
              onChangeText={e => dispatch(CHANGE_WAVE_NAME({ waveId: wave.id, waveName: e }))}
              placeholder="Wave name"
              error={dayErrors[wave.id] ? 'Day must have name.' : ''}
              rightComponent={
                plan.waves.length > 1 && (
                  <TouchableOpacity onPress={() => dispatch(REMOVE_WAVE(wave.id))}>
                    <Icon name="trash" size={32} style={styles.icon} />
                  </TouchableOpacity>
                )
              }
            />
            {wave.days.map(dayId => {
              const selectedDayIndex = plan.days.findIndex(day => day.id === dayId);
              return (
                <View key={plan.days[selectedDayIndex].id} style={styles.dayInput}>
                  <TextInput
                    value={plan.days[selectedDayIndex].name}
                    onChangeText={e => handleDayNameChange({ id: plan.days[selectedDayIndex].id, name: e })}
                    placeholder="Day name"
                    error={dayErrors[plan.days[selectedDayIndex].id] ? 'Day must have name.' : ''}
                    rightComponent={
                      wave.days.length > 1 && (
                        <TouchableOpacity onPress={() => dispatch(REMOVE_DAY(plan.days[selectedDayIndex].id))}>
                          <Icon name="trash" size={32} style={styles.icon} />
                        </TouchableOpacity>
                      )
                    }
                  />
                </View>
              );
            })}
            <Button
              variant="outlined"
              onPress={() => dispatch(ASSIGN_DAY_TO_WAVE({ waveId: wave.id }))}
              style={{ marginTop: 8 }}
            >
              <Typography variant="h3">+ Add day</Typography>
            </Button>
          </View>
        ))}
      </View>
      <Button onPress={() => dispatch(ADD_WAVE())} style={{ marginTop: 16 }}>
        <Typography variant="h3">+ Add wave</Typography>
      </Button>
    </View>
  );
};

export default WaveProgression;
