import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './seriesModal.styles'
import { TextInput } from "react-native-gesture-handler";


const SeriesModal = ({ onConfirm, initReps, initWeight }) => {
  const [reps, setReps] = useState(initReps.toString())
  const [weight, setWeight] = useState(initWeight.toString())

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
            <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SeriesModal;