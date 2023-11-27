import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import { useGetExercise } from "../../../utils/hooks";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './exerciseRow.styles';

const ExerciseRow = ({ exercise, onEdit }) => {
    const [expandDropdown, setExpandDropdown] = useState(false)

    const handleDelete = () => { }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setExpandDropdown(!expandDropdown)}>
                <View style={styles.headingWrapper}>
                    <Text style={styles.text}>{useGetExercise(exercise.id).name}</Text>
                    <View style={styles.iconsWrapper}>
                        <TouchableOpacity onPress={() => onEdit(exercise)}>
                            <Icon name='edit' size={24} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete}>
                            <Icon name='trash' size={24} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    marginLeft: 10,
                    display: expandDropdown ? 'flex' : 'none'
                }}>
                    {exercise.series.map((serie, index) => (
                        <Text style={styles.text} key={index}>{serie.reps}x{serie.weight}kg</Text>
                    ))}
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ExerciseRow;