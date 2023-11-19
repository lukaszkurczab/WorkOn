import React, { useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from "react-redux";
import RepeatRow from '../repeatRow/repeatRow';
import FailedSeriesModal from "../failedSeriesModal/failedSeriesModal";
import styles from './exerciseView.styles';
import { useGetExercise } from '../../../utils/hooks';
import { UPDATE_PROGRESS } from "../../../store/reducers/trainingReducer";

const ExerciseView = ({ clearRestTime, exercise, handleNextExercise }) => {
  const dispatch = useDispatch();
  const [showFailedSeriesModal, setShowFailedSeriesModal] = useState(false);
  const [failedSeriesIndex, setFailedSeriesIndex] = useState();
  const [failedReps, setFailedReps] = useState(0);
  const [failedWeight, setFailderWeight] = useState(0);
  const [finishedSeries, setFinishedSeries] = useState(0);
  const exerciseData = useGetExercise(exercise.id);
  const repeatRows = [];

  const handleSuccess = (index, reps, weight) => {
    dispatch(UPDATE_PROGRESS({
      id: exercise.id,
      index: index,
      reps: reps,
      weight: weight
    }))
    setFinishedSeries(finishedSeries + 1)
    clearRestTime()
    if (finishedSeries >= exercise.series.length - 1) {
      setFinishedSeries(0)
      handleNextExercise()
    }
  }

  const handleFail = (index, initReps, initWiegth) => {
    setShowFailedSeriesModal(true)
    setFailedSeriesIndex(index)
    setFailedReps(initReps)
    setFailderWeight(initWiegth)
    clearRestTime()
  }
  
  const handleFailedSeriesConfirm = ( reps, weight) => {
    dispatch(UPDATE_PROGRESS({
      id: exercise.id,
      index: failedSeriesIndex,
      reps: reps,
      weight: weight
    }))
    setShowFailedSeriesModal(false)
    setFinishedSeries(finishedSeries + 1)
    setFailedSeriesIndex()
    if (finishedSeries >= exercise.series.length - 1) {
      setFinishedSeries(0)
      handleNextExercise()
    }
  }

  for (let i = 0; i < exercise.series.length; i++) {
    const status = finishedSeries < i ? 'inQueue' : exercise.series[i].status
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
      {showFailedSeriesModal && <FailedSeriesModal onConfirm={handleFailedSeriesConfirm} failedReps={failedReps} failedWeight={failedWeight} />}
    </ScrollView>
  );
};

export default ExerciseView;