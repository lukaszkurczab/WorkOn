import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './workoutExerciseTile.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SET_ONGOING_EXERCISE } from '../../../store/reducers/trainingReducer';
import { ExerciseImageMap } from '../../../assets/exercises/_exerciseImageMap';

const WorkoutExerciseTile = ({ exercise, touchable = true }) => {
  const dispatch = useDispatch();
  const exercisesList = useSelector(state => state.exercises.exercises);
  console.log(exercisesList);
  const exerciseData = exercisesList.find(item => item.id === exercise.id);

  const handlePress = () => {
    if (touchable) {
      dispatch(SET_ONGOING_EXERCISE(exercise));
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{exerciseData.name}</Text>
        </View>
        <Image source={ExerciseImageMap[exerciseData.image]} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutExerciseTile;
