import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './exerciseTile.styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { SET_SELECTED_EXERCISE } from "../../../store/reducers/exerciseReducer";

const ExerciseTile = ({ exercise }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(SET_SELECTED_EXERCISE(exercise.id))
    navigation.navigate('ExerciseScreen')
  }

  return(
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={require('../../../assets/atlas_placeholder.jpg')} style={styles.image} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{exercise.name}</Text>
          <Text style={styles.heading}>Main muscle part:</Text>
          {exercise.muscleMain.map((muscleMain)=>(
            <View style={styles.chip} key={muscleMain}>
              <Text style={styles.chipText}>{muscleMain}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default ExerciseTile;