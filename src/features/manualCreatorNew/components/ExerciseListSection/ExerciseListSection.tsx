import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './ExerciseListSection.styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ExerciseList from '../../../../components/ExerciseList/ExerciseList';
import Button from '../../../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { Day } from '../../../../types/plans';
import { useDispatch } from '../../../../utility/hooks';
import { ExerciseData } from '../../../../types/exercises';
import { SELECT_EXERCISE } from '../../store/slice/slice';

type ExerciseListSectionProps = {
  day: Day;
  handleSetStep: (newStep: number) => void;
  handleSetIndex: (newIndex: 'prev' | 'next') => void;
};

const ExerciseListSection = ({ day, handleSetStep, handleSetIndex }: ExerciseListSectionProps) => {
  const dispatch = useDispatch();
  const handleSelect = (exercise: ExerciseData) => {
    dispatch(SELECT_EXERCISE({ day: day, exercise: exercise }));
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 16 }}>
        <Button variant="text" onPress={() => handleSetIndex('prev')} style={{ width: 32 }}>
          <FontAwesomeIcon name="chevron-left" size={14} />
        </Button>
        <Typography variant="h2" style={styles.text}>
          {day.name}
        </Typography>
        <Button variant="text" onPress={() => handleSetIndex('next')} style={{ width: 32 }}>
          <FontAwesomeIcon name="chevron-right" size={14} />
        </Button>
      </View>
      <ScrollView style={styles.listWrapper}>
        <ExerciseList onItemPress={handleSelect} selected={day.exercises} />
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button onPress={() => handleSetStep(0)} style={styles.button}>
          <Typography variant="h3">Back</Typography>
        </Button>
        <Button
          onPress={() => {
            handleSetStep(2);
          }}
          style={[styles.button]}
        >
          <Typography variant="h3">Next</Typography>
        </Button>
      </View>
    </View>
  );
};

export default ExerciseListSection;
