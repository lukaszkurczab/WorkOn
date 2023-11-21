import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { View, Text } from 'react-native';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import ExerciseView from './exerciseView/exerciseView';
import styles from './workoutMain.styles';
import MenuButton from '../buttons/menuButton/menuButton';
import ExercisesList from './exercisesList/exercisesList';
import FinishWorkoutModal from "./finishWotkoutModal/finishWorkoutModal";
import { MARK_EXERCISE_AS_FINISHED } from "../../store/reducers/trainingReducer";
import { useDispatch } from "react-redux";

const WorkoutMain = () => {
  const dispatch = useDispatch();
  const [totalTime, setTotalTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [selectedExerciseIndex, setSelectedExcerciseIndex] = useState(0);
  const [showExercisesList, setShowExercisesList] = useState(false);
  const [showFinishWorkoutModel, setShowFinishWorkoutModel] = useState(false);
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

    setSelectedExcerciseIndex(newExerciseIndex)
    setShowExercisesList(false)
  }

  const handleToggleShowExerciseList = () => {
    setShowExercisesList(!showExercisesList)
  }

  const handleFinishTraining = () => {
    setShowFinishWorkoutModel(true)
  }

  const handleNextExercise = () => {
    dispatch(MARK_EXERCISE_AS_FINISHED({
      index: selectedExerciseIndex
    }));
    for (let i = 0; i < plan.length + 1; i++) {
      if (i == plan.length) {
        handleFinishTraining()
        break;
      } else if (!plan[i].finished && i != selectedExerciseIndex) {
        setSelectedExcerciseIndex(i)
        break;
      }
    }
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
        handleNextExercise={handleNextExercise}
      />
      {showExercisesList && <ExercisesList exercises={plan} onClick={handleSelectNewExercase} />}
      {showFinishWorkoutModel && <FinishWorkoutModal />}
    </View>
  );
};

export default WorkoutMain;