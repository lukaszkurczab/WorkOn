import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './historyDetails.styles';


const HistoryDetails = ({ dayHistory }) => {
    return (
        <View style={styles.container}>
            {dayHistory.map(day => (
                <Text style={{color: 'white'}} key={day.id}>{JSON.stringify(day)}</Text>
            ))}
        </View>
    );
};

export default HistoryDetails;