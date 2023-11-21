import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from "react-redux";
import RepeatRow from '../repeatRow/repeatRow';
import SeriesModal from "../seriesModal/seriesModal";
import styles from './exerciseView.styles';
import { useGetExercise } from '../../../utils/hooks';
import { UPDATE_PROGRESS } from "../../../store/reducers/trainingReducer";

const ExerciseView = ({ clearRestTime, exercise, handleNextExercise }) => {
  const dispatch = useDispatch();
  const [showSeriesModal, setShowSeriesModal] = useState(false);
  const [modalSeriesIndex, setModalSeriesIndex] = useState();
  const [modalReps, setModalReps] = useState(0);
  const [modalWeight, setModalWeight] = useState(0);
  const exerciseData = useGetExercise(exercise.id);
  const repeatRows = [];

  const handleSuccess = (index, initReps, initWiegth) => {
    setShowSeriesModal(true)
    setModalSeriesIndex(index)
    setModalReps(initReps)
    setModalWeight(initWiegth)
    clearRestTime()
  }

  const handleFail = (index, initReps, initWiegth) => {
    setShowSeriesModal(true)
    setModalSeriesIndex(index)
    setModalReps(initReps)
    setModalWeight(initWiegth)
    clearRestTime()
  }
  
  const handleSeriesConfirm = ( reps, weight) => {
    dispatch(UPDATE_PROGRESS({
      id: exercise.id,
      index: modalSeriesIndex,
      reps: reps,
      weight: weight,
      finished: exercise.series.filter(i => i.status === 'finished').length === (exercise.series.length - 1)
    }))
    setShowSeriesModal(false)
    setModalSeriesIndex()
    if (exercise.series.filter(i => i.status === 'finished').length === exercise.series.length - 1) {
      handleNextExercise()
    }
  }

  for (let i = 0; i < exercise.series.length; i++) {
    const status = exercise.series.filter(i => i.status === 'finished').length < i ? 'inQueue' : exercise.series[i].status
    repeatRows.push(
      <RepeatRow
        reps={exercise.series[i].reps}
        weight={exercise.series[i].weight}
        status={status}
        onSuccess={handleSuccess}
        onFail={handleFail}
        index={i}
        key={i}
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
      {showSeriesModal && <SeriesModal onConfirm={handleSeriesConfirm} initReps={modalReps} initWeight={modalWeight} />}
    </ScrollView>
  );
};

export default ExerciseView;