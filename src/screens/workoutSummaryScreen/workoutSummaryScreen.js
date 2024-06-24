import { View } from 'react-native';
import styles from './workoutSummaryScreen.styles';
import WorkoutSummary from '../../components/workoutSummary/workoutSummary';
import Navigation from '../../components/Navigation/Navigation';

const WorkoutSummaryScreen = () => {
  return (
    <Navigation>
      <View style={styles.container}>
        <WorkoutSummary />
      </View>
    </Navigation>
  );
};

export default WorkoutSummaryScreen;
