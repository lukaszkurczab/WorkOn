import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useGetExercise } from '../../../utils/hooks';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './historyDetailsListItem.styles';

const WorkoutSummaryListItem = ({ exercise }) => {
    const [showSeries, setShowSeries] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowSeries(!showSeries)}>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{useGetExercise(exercise.id).name}</Text>
                </View>
                <View style={{display: showSeries ? 'flex' : 'none'}}>
                    {exercise.series.map((i, index) => (
                        <View style={styles.dropdownWrapper} key={index}>
                            <Text style={styles.dropdownText}>Series {index + 1}: {i.reps} x {i.weight}kg</Text>
                        </View>
                    ))}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default WorkoutSummaryListItem;