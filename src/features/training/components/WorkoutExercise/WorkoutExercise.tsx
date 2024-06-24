import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from '../../../../utility/hooks';
import styles from './WorkoutExercise.styles';
import { RootState } from '../../../../store/store';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import Modal from '../../../../components/Modal/Modal';
import SeriesModal from '../SeriesModal/SeriesModal';
import { END_SERIE } from '../../store/slice/slice';

type WorkoutExerciseProps = {
  handleEndTraining: () => void;
};

const WorkoutExercise = ({ handleEndTraining }: WorkoutExerciseProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const exercise = useSelector((state: RootState) => state.training.selectedExercise);
  const seriesIndex = useSelector((state: RootState) => state.training.seriesIndex);
  const serieData = exercise.series[seriesIndex];
  const [modalVisible, setModalVisible] = useState(false);

  const handleFinish = () => {
    setModalVisible(true);
  };

  const handleSeriesConfirm = (id: string, reps: number, weight: number) => {
    dispatch(END_SERIE({ id, reps, weight }));
    setModalVisible(false);
  };

  const handleHelp = () => {
    // dispatch(SET_SELECTED_EXERCISE(exercise.id));
    // navigation.navigate('ExerciseScreen');
  };

  return (
    <View style={{ height: '100%', paddingBottom: 32 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Typography variant="h2" style={styles.title}>
            {exercise.name}
          </Typography>

          <Typography variant="h2">
            {serieData.reps} x {serieData.weight}kg
          </Typography>
          <Typography variant="h3">
            Serie {seriesIndex + 1} of {exercise.series.length}
          </Typography>
          <Image source={require('../../../../assets/exercises/dips.jpg')} style={styles.image} />
          <View style={styles.descWrapper}>
            <Typography variant="h3">Short description</Typography>
            <Typography variant="h4" style={{ textAlign: 'justify' }}>
              {exercise.focusPoints}
            </Typography>
            <View style={{ alignItems: 'flex-end' }}>
              <Button variant="text" onPress={handleHelp} style={{ width: 160 }}>
                <Typography variant="h3" style={styles.buttonText}>
                  Show more
                </Typography>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button style={{ width: 120 }} variant="text" onPress={handleEndTraining}>
          <Typography variant="h3" style={styles.endButtonText}>
            End training
          </Typography>
        </Button>
        <Button style={{ width: 120 }} onPress={handleFinish}>
          <Typography variant="h3" style={styles.buttonText}>
            Finish
          </Typography>
        </Button>
      </View>
      <Modal style={{ width: '70%' }} visible={modalVisible} onClose={() => {}}>
        <SeriesModal
          onConfirm={handleSeriesConfirm}
          id={serieData.id}
          initReps={serieData.reps}
          initWeight={serieData.weight}
        />
      </Modal>
    </View>
  );
};

export default WorkoutExercise;
