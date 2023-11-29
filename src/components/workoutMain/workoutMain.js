import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import ExerciseView from './exerciseView/exerciseView';
import styles from './workoutMain.styles';
import MenuButton from '../buttons/menuButton/menuButton';
import ExercisesList from './exercisesList/exercisesList';
import { SET_TRAINING_SUMMARY } from "../../store/reducers/trainingSummaryReducer";
import { ADD_TO_HISTORY } from "../../store/reducers/historyReducer";
import { useDispatch } from "react-redux";

const WorkoutMain = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [totalTime, setTotalTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [restStart, setRestStart] = useState(Date.now());
  const [selectedExerciseIndex, setSelectedExcerciseIndex] = useState(0);
  const [showExercisesList, setShowExercisesList] = useState(false);
  const plan = useSelector((store) => store.training.ongoingTraining);
  const planName = useSelector((store) => store.training.ongoingTrainingName);
  const trainingStart = useSelector((store) => store.training.startTraining);

  useEffect(() => {
    const totalInterval = setInterval(() => {
      setTotalTime(Date.now() - trainingStart)
    }, 1000);

    return () => clearInterval(totalInterval)
  }, [])
  
  useEffect(() => {
    setRestTime(Date.now() - restStart)
  }, [totalTime])

  const handleResetRestTime = () => {
    setRestStart(Date.now())
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
    dispatch(SET_TRAINING_SUMMARY({
      training: plan,
      name: planName,
    }));
    
    dispatch(ADD_TO_HISTORY({
      name: planName,
      totalTime: totalTime,
      exercises: plan
    }));
    navigation.navigate('WorkoutSummaryScreen');
  }

  const handleNextExercise = () => {
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
      <TouchableOpacity onPress={handleFinishTraining}><Text>Go to summary</Text></TouchableOpacity>
    </View>
  );
};

export default WorkoutMain;