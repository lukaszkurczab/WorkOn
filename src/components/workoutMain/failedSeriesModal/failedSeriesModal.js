import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './failedSeriesModal.styles'
import { TextInput } from "react-native-gesture-handler";


const FailedSeriesModal = ({ onConfirm }) => {
  return (
    <View style={styles.container} >
        <Text style={styles.title}>Enter reps completed:</Text>
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Reps:</Text>
            <TextInput style={styles.input} keyboardType='numeric' maxLength={5}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Weight:</Text>
            <TextInput style={styles.input} keyboardType='numeric' maxLength={5}></TextInput>
        </View>
        <TouchableOpacity onPress={() => onConfirm()} style={styles.button}>
            <Text style={styles.buttonText}>Potwierdź</Text>
        </TouchableOpacity>
    </View>
  );
};

export default FailedSeriesModal;