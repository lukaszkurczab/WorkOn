import React, { useState, useId } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useGetExercise } from "../../../utils/hooks";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from "react-native-gesture-handler";
import styles from './exerciseModifyModal.styles'


const ExerciseModifyModal = ({ onConfirm, exercise }) => {
    const [modifiedExercise, setModifiedExercise] = useState({ ...exercise });

    const handleAddSerie = () => {
        const newId = (Math.random() * 100000).toFixed()
        const newModifiedExercise = {
            id: modifiedExercise.id,
            series: [
                ...modifiedExercise.series,
                {
                    reps: 0,
                    weight: 0,
                    id: newId
                },
            ]
        }

        setModifiedExercise(newModifiedExercise)
    }

    const handleRemoveSerie = (serieIndex) => {
        const newModifiedExercise = {
            id: modifiedExercise.id,
            series: [...modifiedExercise.series].filter((i) => i.id != serieIndex)
        }

        setModifiedExercise(newModifiedExercise)
    }

    return (
        <ScrollView style={styles.container} >
            <View style={styles.row}>
                <Text style={styles.title}>{useGetExercise(exercise.id).name}</Text>
                <TouchableOpacity>
                    <Icon name='sync' size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {modifiedExercise.series.map((i, index) => (
                <View key={i.id} style={styles.serieWrapper}>
                    <View style={styles.row}>
                        <Text style={styles.inputLabel}>Serie {index + 1}:</Text>
                        <TouchableOpacity onPress={() => handleRemoveSerie(i.id)}>
                            <Icon name='trash' size={18} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputLabel, styles.seriesLabel]}>Reps:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            maxLength={5}
                            defaultValue={'0'}
                            onChangeText={()=>{}}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputLabel, styles.seriesLabel]}>Weight:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            maxLength={5}
                            defaultValue={'0'}
                            onChangeText={()=>{}}
                        >
                        </TextInput>
                    </View>
                </View>
            ))}
            <TouchableOpacity onPress={handleAddSerie}>
                <Text style={styles.inputLabel}>Add serie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onConfirm()} style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ExerciseModifyModal;