import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../components/Button/Button';
import { exercisesList, Exercise } from '../../../../assets/exercises/_exercise';
import styles from './CarouselItem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, gray, red } from '../../../../styles/colors';
import CarouselItemSerie from '../CarouselItemSerie/CarouselItemSerie';

type CarouselItemProps = {
  name: string;
  id: string;
};

function getExerciseById(id: string): Exercise | undefined {
  for (const group of exercisesList) {
    const exercise = group.exercises.find(exercise => exercise.id === id);
    if (exercise) {
      return exercise;
    }
  }
  return undefined;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ name, id }) => {
  const dispatch = useDispatch();
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);
  const exercises = useSelector(
    (state: RootState) => state.plans.selectedPlan!.days.find(day => day.id === id)!.exercises
  );
  const [step, setStep] = useState(0);

  const handleSelectExercise = (index: number) => {
    setSelectedExerciseIndex(index);
    setStep(1);
  };

  const onPreviousExercisePress = () => {
    setSelectedExerciseIndex(selectedExerciseIndex - 1);
  };

  const onNextExercisePress = () => {
    setSelectedExerciseIndex(selectedExerciseIndex + 1);
  };

  const getStepContent = (step: number, header: string) => {
    switch (step) {
      case 0:
        return (
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Typography variant="h2" style={[styles.text, styles.header]}>
                {header}
              </Typography>
            </View>
            <View style={{ gap: 8, marginBottom: 8 }}>
              {exercises && exercises.length > 0 && (
                <>
                  {exercises.map((exercise, index) => (
                    <View key={exercise.id} style={styles.selectedExerciseItem}>
                      <TouchableOpacity onPress={() => handleSelectExercise(index)} style={{ width: '80%' }}>
                        <Typography variant="h4" style={[styles.text, { alignSelf: 'flex-start' }]}>
                          {getExerciseById(exercise.id)?.name}
                        </Typography>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}} style={styles.iconWrapper}>
                        <FontAwsome5Icon name="eye" size={18} style={styles.viewIcon} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </>
              )}
            </View>
          </View>
        );
      case 1:
        return (
          <View style={{ width: '100%' }}>
            {exercises && (
              <View style={{ height: '100%' }}>
                <Typography variant="h2" style={[styles.text, styles.header]}>
                  {getExerciseById(exercises![selectedExerciseIndex].id)?.name}
                </Typography>
                <View style={styles.editWrapper}>
                  <View style={[styles.row, { backgroundColor: gray }]}>
                    <Typography variant="h5" style={{ color: backgroundColor }}>
                      Repetitions range
                    </Typography>
                    <View style={{ flexDirection: 'row' }}>
                      <Typography variant="h5" style={{ color: backgroundColor }}>
                        {exercises![selectedExerciseIndex].repsRange[0]}
                      </Typography>

                      <Typography variant="h5" style={{ color: backgroundColor }}>
                        {' - '}
                      </Typography>
                      <Typography variant="h5" style={{ color: backgroundColor }}>
                        {exercises![selectedExerciseIndex].repsRange[1]}
                      </Typography>
                    </View>
                  </View>
                  <View style={[styles.row, { backgroundColor: gray }]}>
                    <Typography variant="h5" style={{ color: backgroundColor }}>
                      Weight increase [kg]
                    </Typography>
                    <Typography variant="h5" style={{ color: backgroundColor }}>
                      {exercises![selectedExerciseIndex].loadIncrease}
                    </Typography>
                  </View>
                  <Typography variant="h5" style={[styles.row, { backgroundColor: gray }]}>
                    Series
                  </Typography>
                  <ScrollView style={styles.seriesScrollView}>
                    {exercises![selectedExerciseIndex].series.map((serie, index) => (
                      <CarouselItemSerie key={serie.id} reps={serie.reps} weight={serie.weight} index={index} />
                    ))}
                  </ScrollView>
                </View>
                <View style={styles.buttonsWrapper}>
                  {selectedExerciseIndex === 0 ? (
                    <Button onPress={() => setStep(0)} style={styles.button}>
                      <Typography variant="h3">Back</Typography>
                    </Button>
                  ) : (
                    <Button onPress={() => onPreviousExercisePress()} style={styles.button}>
                      <Typography variant="h3">Previous</Typography>
                    </Button>
                  )}
                  {selectedExerciseIndex === exercises!.length - 1 ? (
                    <Button onPress={() => setStep(0)} style={styles.button}>
                      <Typography variant="h3">Back</Typography>
                    </Button>
                  ) : (
                    <Button
                      onPress={() => {
                        onNextExercisePress();
                      }}
                      style={[styles.button]}
                    >
                      <Typography variant="h3">Next</Typography>
                    </Button>
                  )}
                </View>
              </View>
            )}
          </View>
        );
      default:
        return;
    }
  };

  return (
    <View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {getStepContent(step, name)}
      </ScrollView>
    </View>
  );
};

export default CarouselItem;
