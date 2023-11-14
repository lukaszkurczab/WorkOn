import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { View, Text } from 'react-native';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import ExerciseView from './exerciseView/exerciseView';
import styles from './workoutMain.styles';
import MenuButton from '../buttons/menuButton/menuButton';
import ExercisesList from './exercisesList/exercisesList';

const WorkoutMain = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [selectedExerciseIndex, setSelectedEcerciseIndex] = useState(0);
  const [showExercisesList, setShowExercisesList] = useState(false);
  const plan = useSelector((store) => store.training.ongoingTraining)

  useEffect(() => {
    const totalInterval = setInterval(() => {
      setTotalTime(totalTime => totalTime + 1)
      setRestTime(restTime => restTime + 1)
    }, 1000);

    return () => clearInterval(totalInterval)
  }, [])

  const handleResetRestTime = () => {
    setRestTime(0)
  }

  const handleSelectNewExercase = (id) => {
    const newExerciseIndex = plan.map((x) => x.id).indexOf(id)

    setSelectedEcerciseIndex(newExerciseIndex)
    setShowExercisesList(false)
  }

  const handleToggleShowExerciseList = () => {
    setShowExercisesList(!showExercisesList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.timers}>
        <View>
          <Text style={styles.timersText}>Total</Text>
          <WorkoutTimer time={totalTime} />
        </View>
        <View>
          <Text style={styles.timersText}>Rest</Text>
          <WorkoutTimer time={restTime} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <MenuButton onClick={handleToggleShowExerciseList}/>
      </View>
      <ExerciseView
        clearRestTime={handleResetRestTime}
        exercise={plan[selectedExerciseIndex]}
      />
      {showExercisesList && <ExercisesList exercises={plan} onClick={handleSelectNewExercase} />}
    </View>
  );
};

export default WorkoutMain;