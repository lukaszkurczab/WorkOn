import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

const SeriesModal = ({ onConfirm, initReps, initWeight, id }: SeriesModalProps) => {
  const [reps, setReps] = useState(initReps);
  const [weight, setWeight] = useState(initWeight);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How many reps did you do?:</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Repetitions:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={5}
          value={reps.toString()}
          textStyle={styles.inputText}
          onChangeText={newValue => setReps(Number(newValue))}
        ></TextInput>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Weight:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={5}
          value={weight.toString()}
          textStyle={styles.inputText}
          onChangeText={newValue => setWeight(Number(newValue))}
        ></TextInput>
      </View>
      <Button onPress={() => onConfirm(id, reps, weight)} style={{ marginTop: 8 }}>
        <Typography variant="h4">Confirm</Typography>
      </Button>
    </View>
  );
};

export default SeriesModal;
