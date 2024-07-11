import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './SeriesModal.styles';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

type SeriesModalProps = {
  onConfirm: (id: string, reps: number, weight: number) => void;
  initReps: number;
  initWeight: number;
  id: string;
};

const SeriesModal: React.FC<SeriesModalProps> = ({ onConfirm, initReps, initWeight, id }) => {
  const [reps, setReps] = useState<string>(initReps.toString());
  const [weight, setWeight] = useState<string>(initWeight.toString());

  return (
    <View style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        How many reps did you do?
      </Typography>
      <View style={styles.inputWrapper}>
        <Typography variant="h6" style={styles.inputLabel}>
          Repetitions:
        </Typography>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={5}
          value={reps}
          textStyle={styles.inputText}
          onChangeText={newValue => setReps(newValue)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Typography variant="h6" style={styles.inputLabel}>
          Weight:
        </Typography>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={5}
          value={weight}
          textStyle={styles.inputText}
          onChangeText={newValue => setWeight(newValue)}
        />
      </View>
      <Button onPress={() => onConfirm(id, Number(reps), Number(weight))} style={styles.button}>
        <Typography variant="h4">Confirm</Typography>
      </Button>
    </View>
  );
};

export default SeriesModal;
