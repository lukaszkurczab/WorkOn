import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './SelectedExercisesSection.styles';
import { Day } from '../../../../types/plans';
import { red } from '../../../../styles/colors';
import { Exercise } from '../../../../types/exercises';
import { navigate } from '../../../../utility/navigate';
import { useDispatch, useGetExerciseData } from '../../../../utility/hooks';
import { CHANGE_EXERCISES_ORDER, UNSELECT_EXERCISE } from '../../store/slice/slice';
import { DraggableList } from '../../../../components/DraggableList/DraggableList';
import Button from '../../../../components/Button/Button';

type SelectedExercisesSectionProps = {
  days: Day[];
};

const SelectedExercisesSection = ({ days }: SelectedExercisesSectionProps) => {
  return (
    <View style={{ width: '100%' }}>
      {days.map(day => (
        <Typography variant="h2">{day.name}</Typography>
      ))}
    </View>
  );
};

export default SelectedExercisesSection;
