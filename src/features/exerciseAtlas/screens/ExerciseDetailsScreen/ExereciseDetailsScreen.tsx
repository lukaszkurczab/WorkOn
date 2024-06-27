import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './exerciseScreen.styles';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ExerciseImageMap } from '../../assets/exercises/_exerciseImageMap';

const ExerciseScreen = () => {
  const navigation = useNavigation();
  const exercise = useSelector(state => state.exercises.selectedExercise);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{exercise.name}</Text>
        <Image source={ExerciseImageMap[exercise.image]} style={styles.image} />
        <Text style={styles.sectionTitle}>Start position:</Text>
        <Text style={styles.text}>{exercise.startPosition}</Text>
        <Text style={styles.sectionTitle}>Process:</Text>
        <Text style={styles.text}>{exercise.process}</Text>
        <Text style={styles.sectionTitle}>Main muscles:</Text>
        {exercise.muscleMain.map(muscle => (
          <View style={styles.chip} key={muscle}>
            <Text style={styles.chipText}>{muscle}</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Assisting muscles:</Text>
        {exercise.muscleAdditional.map(muscle => (
          <View style={styles.chip} key={muscle}>
            <Text style={styles.chipText}>{muscle}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseScreen;
