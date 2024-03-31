import { useSelector } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import styles from './atlasScreen.styles';
import ExerciseTile from '../../components/tiles/exerciseTile/exerciseTile';
import AtlasDropdown from '../../components/atlasDropdown/atlasDropdown';

const AtlasScreen = () => {
  const exercises = useSelector(store => store.exercises.data);
  const selecterMusclesGroup = useSelector(store => store.atlas.selectedGroup);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Exercise atlas</Text>
        <AtlasDropdown />
        <View style={styles.atlasWrapper}>
          {exercises.map(exercise => {
            if (selecterMusclesGroup === 'Select group' || exercise.groups.includes(selecterMusclesGroup)) {
              return <ExerciseTile exercise={exercise} key={exercise.id} />;
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AtlasScreen;
