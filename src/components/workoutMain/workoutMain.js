import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import WorkoutTimer from '../workoutTimer/workoutTimer';
import ExerciseView from './exerciseView/exerciseView';
import styles from './workoutMain.styles';
import { useGetPlan } from '../../utils/hooks';
import { settings } from '../../store/db/settings';

const WorkoutMain = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [selectedExerciseIndex, setSelectedEcerciseIndex] = useState(0)
  const plan = useGetPlan(settings.selectedPlan.id);

  useEffect(() => {
    const totalInterval = setInterval(() => {
      setTotalTime(totalTime => totalTime + 1)
      setRestTime(restTime => restTime + 1)
    }, 1000);

    return () => clearInterval(totalInterval)
  },[])

  const handleResetRestTime = ()=>{
    setRestTime(0)
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
      <ExerciseView clearRestTime={handleResetRestTime} exercise={plan.days[0].exercises[selectedExerciseIndex]} />
    </View>
  );
};

export default WorkoutMain;