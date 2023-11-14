import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './failedSeriesModal.styles'
import { TextInput } from "react-native-gesture-handler";


const FailedSeriesModal = ({ onConfirm, failedReps, failedWeight }) => {
  const [reps, setReps] = useState(failedReps.toString())
  const [weight, setWeight] = useState(failedWeight.toString())

  return (
    <View style={styles.container} >
        <Text style={styles.title}>Enter reps completed:</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Reps:</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            maxLength={5}
            defaultValue={reps}
            onChangeText={setReps}
          >
          </TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Weight:</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            maxLength={5}
          defaultValue={weight}
          onChangeText={setWeight}
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => onConfirm(reps, weight)} style={styles.button}>
            <Text style={styles.buttonText}>Potwierdź</Text>
        </TouchableOpacity>
    </View>
  );
};

export default FailedSeriesModal;