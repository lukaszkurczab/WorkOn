import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../components/Button/Button';
import styles from './ExerciseEditSection.styles';
import { useDispatch } from 'react-redux';
import { UPDATE_EXERCISE_IN_PLAN, UNSELECT_EXERCISE, REMOVE_SERIES } from '../../store/slice/slice';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, gray, red } from '../../../../styles/colors';
import { Exercise, Series } from '../../../../types/exercises';
import Modal from '../../../../components/Modal/Modal';
import SeriesEditSection from '../SeriesEditSection/SeriesEditSection';
import { useGenerateID } from '../../../../utility/hooks';

type ExerciseEditSectionProps = {
  dayId: string;
  exercise: Exercise;
  lastExerciseIndex: number;
  selectedExerciseIndex: number;
  handleSetStep: (newStep: number) => void;
  handleSetSelectedExerciseIndex: (newIndex: number) => void;
};

const ExerciseEditSection = ({
  dayId,
  selectedExerciseIndex,
  lastExerciseIndex,
  exercise,
  handleSetSelectedExerciseIndex,
  handleSetStep,
}: ExerciseEditSectionProps) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({ display: false, text: '' });
  const [repetitionsRangeValue, setRepetitionsRangeValue] = useState<(number | string)[]>(exercise.repsRange);
  const [loadIncreaseValue, setLoadIncreaseValue] = useState<number | string>(exercise.loadIncrease);
  const [series, setSeries] = useState<Series[]>(exercise.series);

  const handleRemoveSeries = (exerciseId: string, seriesIndex: number) => {
    dispatch(REMOVE_SERIES({ dayId: dayId, exerciseId, seriesIndex }));
    const updatedSeries = series.filter((_, index) => index !== seriesIndex);
    setSeries(updatedSeries);
  };

  useEffect(() => {
    setRepetitionsRangeValue(exercise.repsRange);
    setLoadIncreaseValue(exercise.loadIncrease);
    setSeries(exercise.series);
  }, [exercise]);

  const handleUpdateExercise = (property: string, newValue?: any, serieIndex?: number) => {
    let updatedExercise = { ...exercise };
    switch (property) {
      case 'minReps':
        setRepetitionsRangeValue([newValue, repetitionsRangeValue[1]]);
        const minReps = newValue === '' ? 0 : Number(newValue);
        updatedExercise = { ...updatedExercise, repsRange: [minReps, updatedExercise.repsRange[1]] };
        break;
      case 'maxReps':
        setRepetitionsRangeValue([repetitionsRangeValue[0], newValue]);
        const maxReps = newValue === '' ? 0 : Number(newValue);
        updatedExercise = { ...updatedExercise, repsRange: [updatedExercise.repsRange[0], maxReps] };
        break;
      case 'loadIncrease':
        setLoadIncreaseValue(newValue);
        const loadIncrease = newValue === '' ? 0 : Number(newValue);
        updatedExercise = { ...updatedExercise, loadIncrease };
        break;
      case 'serieReps':
        const newSerieReps = [...updatedExercise.series];
        newSerieReps[serieIndex!] = { ...newSerieReps[serieIndex!], reps: newValue };
        updatedExercise.series = newSerieReps;
        break;
      case 'serieWeight':
        const newSerieWeight = [...updatedExercise.series];
        newSerieWeight[serieIndex!] = { ...newSerieWeight[serieIndex!], weight: newValue };
        updatedExercise.series = newSerieWeight;
        break;
      case 'addSeries':
        const newSeries = [
          ...updatedExercise.series,
          {
            id: useGenerateID(),
            reps: 4,
            weight: 20,
          },
        ];
        updatedExercise.series = newSeries;
        setSeries(newSeries);
        break;
    }

    dispatch(
      UPDATE_EXERCISE_IN_PLAN({
        dayId: dayId,
        exercise: updatedExercise,
      })
    );
  };

  const onSaveExercisePress = () => {
    handleSetStep(0);
  };

  return (
    <View style={{ width: '100%' }}>
      <Typography variant="h2" style={[styles.text, styles.header]}>
        {exercise.name}
        <TouchableOpacity
          onPress={() => dispatch(UNSELECT_EXERCISE({ dayId: dayId, exerciseId: exercise.id }))}
          style={styles.viewIcon}
        >
          <FontAwesomeIcon name="trash" size={24} style={{ color: red }} />
        </TouchableOpacity>
      </Typography>
      <View style={styles.editWrapper}>
        <View style={[styles.row, { backgroundColor: gray }]}>
          <Typography variant="h5" style={{ color: backgroundColor }}>
            Repetitions range
          </Typography>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={`${repetitionsRangeValue[0]}`}
              onEndEditing={() =>
                repetitionsRangeValue[0] === '' ? setRepetitionsRangeValue([0, exercise.repsRange[1]]) : null
              }
              onChangeText={text => handleUpdateExercise('minReps', text)}
            />
            <Typography variant="h5" style={{ color: backgroundColor }}>
              {' - '}
            </Typography>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={`${repetitionsRangeValue[1]}`}
              onEndEditing={() =>
                repetitionsRangeValue[1] === '' ? setRepetitionsRangeValue([exercise.repsRange[0], 0]) : null
              }
              onChangeText={text => handleUpdateExercise('maxReps', text)}
            />
          </View>
        </View>
        <View style={[styles.row, { backgroundColor: gray }]}>
          <Typography variant="h5" style={{ color: backgroundColor }}>
            Weight increase [kg]
          </Typography>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={`${loadIncreaseValue}`}
            onEndEditing={() => (loadIncreaseValue === '' ? setLoadIncreaseValue(0) : null)}
            onChangeText={text => handleUpdateExercise('loadIncrease', text)}
          />
        </View>
        <ScrollView style={styles.seriesScrollView}>
          {series.map((serie, index) => (
            <SeriesEditSection
              key={serie.id}
              exerciseId={exercise.id}
              reps={serie.reps}
              weight={serie.weight}
              index={index}
              onEdit={handleUpdateExercise}
              onRemove={handleRemoveSeries}
            />
          ))}
          <View
            style={[
              styles.row,
              {
                backgroundColor: gray,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: backgroundColor,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                handleUpdateExercise('addSeries');
              }}
              style={{ width: '100%' }}
            >
              <Typography
                variant="h5"
                style={{
                  color: backgroundColor,
                }}
              >
                + Add series
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonsWrapper}>
        {selectedExerciseIndex === 0 ? (
          <Button onPress={() => handleSetStep(0)} style={styles.button}>
            <Typography variant="h3">Back</Typography>
          </Button>
        ) : (
          <Button onPress={() => handleSetSelectedExerciseIndex(selectedExerciseIndex - 1)} style={styles.button}>
            <Typography variant="h3">Previous</Typography>
          </Button>
        )}
        {selectedExerciseIndex === lastExerciseIndex ? (
          <Button onPress={onSaveExercisePress} style={[styles.button]}>
            <Typography variant="h3">Save</Typography>
          </Button>
        ) : (
          <Button
            onPress={() => {
              handleSetSelectedExerciseIndex(selectedExerciseIndex + 1);
            }}
            style={[styles.button]}
          >
            <Typography variant="h3">Next</Typography>
          </Button>
        )}
      </View>
      <Modal visible={modal.display} onClose={() => setModal({ display: false, text: '' })}>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          {modal.text}
        </Typography>
      </Modal>
    </View>
  );
};

export default ExerciseEditSection;
