import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { RootState } from '../../../store/store';

const useTrainingNotification = () => {
  const step = useSelector((state: RootState) => state.training.step);
  const selectedExercise = useSelector((state: RootState) => state.training.selectedExercise);
  const restTime = useSelector((state: RootState) => state.training.restTime);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'background') {
        switch (step) {
          case 'exercise':
            PushNotification.localNotification({
              title: 'Training in Progress',
              message: `${selectedExercise.name}, ${selectedExercise.series[selectedExercise.seriesIndex].reps} x ${
                selectedExercise.series[selectedExercise.seriesIndex].weight
              } kg`,
            });
            break;
          case 'select':
            PushNotification.localNotification({
              title: 'Training in Progress',
              message: 'Select exercise',
            });
            break;
          case 'rest':
            PushNotification.localNotification({
              title: 'Rest Time',
              message: `Resting for ${restTime} seconds`,
            });
            break;
          default:
            break;
        }
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [step, selectedExercise, restTime]);
};

export default useTrainingNotification;
