import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from "react-redux";
import RepeatRow from '../repeatRow/repeatRow';
import SeriesModal from "../seriesModal/seriesModal";
import styles from './exerciseView.styles';
import { useGetExercise } from '../../../utils/hooks';
import { MARK_EXERCISE_AS_FINISHED, UPDATE_PROGRESS } from "../../../store/reducers/trainingReducer";
import { SET_SELECTED_EXERCISE } from "../../../store/reducers/exerciseReducer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ExerciseView = ({ clearRestTime, exercise, handleNextExercise }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showSeriesModal, setShowSeriesModal] = useState(false);
  const [modalSeriesIndex, setModalSeriesIndex] = useState();
  const [modalReps, setModalReps] = useState(0);
  const [modalWeight, setModalWeight] = useState(0);
  const [seriesSuccess, setSeriesSuccess] = useState(false);
  const exerciseData = useGetExercise(exercise.id);
  const repeatRows = [];

  const handleSeriesFinish = (index, initReps, initWiegth, success) => {
    setShowSeriesModal(true)
    setModalSeriesIndex(index)
    setModalReps(initReps)
    setModalWeight(initWiegth)
    setSeriesSuccess(success)
    clearRestTime()
  }
  
  const handleSeriesConfirm = ( reps, weight) => {
    dispatch(UPDATE_PROGRESS({
      id: exercise.id,
      index: modalSeriesIndex,
      reps: reps,
      weight: weight,
      finished: exercise.series.filter(i => i.status === 'finished').length === (exercise.series.length - 1),
      success: seriesSuccess
    }))
    setShowSeriesModal(false)
    setModalSeriesIndex()
    if (exercise.series.filter(i => i.status === 'finished').length === exercise.series.length - 1) {
      dispatch(MARK_EXERCISE_AS_FINISHED({
        index: exercise.series.length - 1
      }));
      handleNextExercise()
    }
  }

  const handleShowMore = () => {
    dispatch(SET_SELECTED_EXERCISE(exercise.id))
    navigation.navigate('ExerciseScreen')
  }

  for (let i = 0; i < exercise.series.length; i++) {
    const status = exercise.series.filter(i => i.status === 'finished').length < i ? 'inQueue' : exercise.series[i].status
    repeatRows.push(
      <RepeatRow
        reps={exercise.series[i].reps}
        weight={exercise.series[i].weight}
        status={status}
        onFinish={handleSeriesFinish}
        index={i}
        key={i}
        finishedWithSuccess={exercise.series[i].success}
      />
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleWrapper}> 
        <Text style={styles.title}>{exerciseData.name}</Text>
      </View>
      <View style={styles.seriesWrapper}>
        {repeatRows}
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.descTitle}>Short description</Text>
        <Text style={styles.descText}>{exerciseData.focusPoints}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={handleShowMore}>
          <Text style={styles.buttonText}>Show more</Text>
        </TouchableOpacity>
      </View>
      {showSeriesModal && <SeriesModal onConfirm={handleSeriesConfirm} initReps={modalReps} initWeight={modalWeight} />}
    </ScrollView>
  );
};

export default ExerciseView;