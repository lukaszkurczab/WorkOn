import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../components/Button/Button';
import { Exercise } from '../../../../types/exercises';
import ExerciseList from '../../../../components/ExerciseList/ExerciseList';
import styles from './PlanCarouselItem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import {
  ADD_EXERCISE_TO_PLAN,
  UPDATE_EXERCISE_IN_PLAN,
  UNSELECT_EXERCISE,
  REMOVE_SERIES,
} from '../../store/slice/slice';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Modal from '../../../../components/Modal/Modal';
import { backgroundColor, gray, red } from '../../../../styles/colors';
import PlanCarouselItemSerie from '../PlanCarouselItemSerie/PlanCarouselItemSerie';

type PlanCarouselItemProps = {
  name: string;
  id: string;
};

const PlanCarouselItem: React.FC<PlanCarouselItemProps> = ({ name, id }) => {
  const dispatch = useDispatch();
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);
  const exerciseList = useSelector(
    (state: RootState) => state.planCreator.newPlan.days.find(day => day.id === id)!.exercises
  );
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState({ display: false, text: '' });
  const [repetitionsRangeValue, setRepetitionsRangeValue] = useState<(number | string)[]>(
    exerciseList![selectedExerciseIndex].repsRange
  );
  const [loadIncreaseValue, setLoadIncreaseValue] = useState<number | string>(
    exerciseList![selectedExerciseIndex].loadIncrease
  );

  const handleSelect = ({ dayId, exerciseId, name }: { dayId: string; exerciseId: string; name: string }) => {
    dispatch(
      ADD_EXERCISE_TO_PLAN({
        dayId,
        exercise: {
          id: exerciseId,
          name,
          repsRange: [4, 6],
          loadIncrease: 5,
          series: [
            {
              id: '',
              reps: 1,
              weight: 20,
            },
          ],
        },
      })
    );
  };

  const handleUnselectExercise = (exerciseId: string) => {
    dispatch(UNSELECT_EXERCISE({ dayId: id, exerciseId }));
  };

  const handleRemoveSeries = (exerciseId: string, seriesIndex: number) => {
    dispatch(REMOVE_SERIES({ dayId: id, exerciseId, seriesIndex }));
  };

  const handleSelectEditExercise = (index: number) => {
    setStep(2);
    setSelectedExerciseIndex(index);
  };

  const handleUpdateExercise = (exerciseIndex: number, property: string, newValue?: any, serieIndex?: number) => {
    let updatedExercise = { ...exerciseList![exerciseIndex] };
    switch (property) {
      case 'minReps':
        if (newValue === '') {
          setRepetitionsRangeValue(['', updatedExercise.repsRange[1]]);
          updatedExercise = { ...updatedExercise, repsRange: [0, updatedExercise.repsRange[1]] };
        } else {
          setRepetitionsRangeValue([newValue, updatedExercise.repsRange[1]]);
          updatedExercise = { ...updatedExercise, repsRange: [Number(newValue), updatedExercise.repsRange[1]] };
        }
        break;
      case 'maxReps':
        if (newValue === '') {
          setRepetitionsRangeValue([updatedExercise.repsRange[0], '']);
          updatedExercise = { ...updatedExercise, repsRange: [updatedExercise.repsRange[0], 0] };
        } else {
          setRepetitionsRangeValue([updatedExercise.repsRange[0], Number(newValue)]);
          updatedExercise = { ...updatedExercise, repsRange: [updatedExercise.repsRange[0], Number(newValue)] };
        }
        break;
      case 'loadIncrease':
        setLoadIncreaseValue(newValue);
        if (newValue === '') {
          updatedExercise = { ...updatedExercise, loadIncrease: 0 };
        } else {
          updatedExercise = { ...updatedExercise, loadIncrease: Number(newValue) };
        }
        break;
      case 'serieReps':
        updatedExercise = {
          ...updatedExercise,
          series: updatedExercise.series.map((s, i) => {
            if (i === serieIndex) {
              return { ...s, reps: Number(newValue) };
            }
            return s;
          }),
        };
        break;
      case 'serieWeight':
        updatedExercise = {
          ...updatedExercise,
          series: updatedExercise.series.map((s, i) => {
            if (i === serieIndex) {
              return { ...s, weight: Number(newValue) };
            }
            return s;
          }),
        };
        break;
      case 'addSeries':
        updatedExercise = {
          ...updatedExercise,
          series: [
            ...updatedExercise.series,
            {
              id: `${Math.random()}`,
              reps: 4,
              weight: 20,
            },
          ],
        };
        break;
    }

    console.log(updatedExercise);
    dispatch(
      UPDATE_EXERCISE_IN_PLAN({
        dayId: id,
        exercise: updatedExercise,
      })
    );
  };

  const onPreviousExercisePress = () => {
    setSelectedExerciseIndex(selectedExerciseIndex - 1);
  };

  const onSaveExercisePress = () => {
    if (exerciseList[selectedExerciseIndex].repsRange[0] > exerciseList[selectedExerciseIndex].repsRange[1]) {
      setModal({ display: true, text: 'Minimum repetitions should be lower than maximum repetitions' });
    } else if (
      exerciseList[selectedExerciseIndex].series.some(
        serie =>
          serie.reps < exerciseList[selectedExerciseIndex].repsRange[0] ||
          serie.reps > exerciseList[selectedExerciseIndex].repsRange[1]
      )
    ) {
      setModal({ display: true, text: 'Repetitions in every series should be in repetitions range' });
    } else {
      setStep(0);
    }
  };

  const onNextExercisePress = () => {
    if (exerciseList[selectedExerciseIndex].repsRange[0] > exerciseList[selectedExerciseIndex].repsRange[1]) {
      setModal({ display: true, text: 'Minimum repetitions should be lower than maximum repetitions' });
    } else if (
      exerciseList[selectedExerciseIndex].series.some(
        serie =>
          serie.reps < exerciseList[selectedExerciseIndex].repsRange[0] ||
          serie.reps > exerciseList[selectedExerciseIndex].repsRange[1]
      )
    ) {
      setModal({ display: true, text: 'Repetitions in every series should be in repetitions range' });
    } else {
      setSelectedExerciseIndex(selectedExerciseIndex + 1);
    }
  };

  const getStepContent = (step: number, header: string, dayId: string) => {
    switch (step) {
      case 0:
        return (
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Typography variant="h2" style={[styles.text, styles.header]}>
                {header}
              </Typography>
            </View>
            <ScrollView style={{ width: '100%' }}>
              {exerciseList && exerciseList.length > 0 && (
                <View>
                  {exerciseList.map((exercise, index) => (
                    <View key={exercise.id} style={styles.selectedExerciseItem}>
                      <TouchableOpacity onPress={() => {}} style={styles.viewIcon}>
                        <FontAwsome5Icon name="eye" size={14} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleSelectEditExercise(index)} style={{ width: '80%' }}>
                        <Typography variant="h4" style={[styles.text, { alignSelf: 'flex-start' }]}>
                          {exercise.name}
                        </Typography>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleUnselectExercise(exercise.id)} style={styles.viewIcon}>
                        <FontAwesomeIcon name="trash" size={20} style={{ color: red }} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
              <TouchableOpacity style={styles.addExerciseButton} onPress={() => setStep(step + 1)}>
                <Typography variant="h3" style={styles.addExerciseButtonText}>
                  + Add exercises
                </Typography>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
      case 1:
        return (
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Typography variant="h2" style={[styles.text, styles.header]}>
                {header}
              </Typography>
            </View>
            <ScrollView style={styles.exercisesList}>
              <ExerciseList dayId={dayId} onSelect={handleSelect} />
            </ScrollView>
            <View style={styles.buttonsWrapper}>
              <Button onPress={() => setStep(0)} style={styles.button}>
                <Typography variant="h3">Back</Typography>
              </Button>
              <Button
                onPress={() => {
                  setStep(2);
                }}
                style={[styles.button]}
              >
                <Typography variant="h3">Next</Typography>
              </Button>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={{ width: '100%' }}>
            {exerciseList && (
              <>
                <Typography variant="h2" style={[styles.text, styles.header]}>
                  {exerciseList![selectedExerciseIndex].name}
                  <TouchableOpacity
                    onPress={() => handleUnselectExercise(exerciseList![selectedExerciseIndex].id)}
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
                          repetitionsRangeValue[0] === ''
                            ? setRepetitionsRangeValue([0, exerciseList![selectedExerciseIndex].repsRange[1]])
                            : null
                        }
                        onChangeText={text => handleUpdateExercise(selectedExerciseIndex, 'minReps', text)}
                      />
                      <Typography variant="h5" style={{ color: backgroundColor }}>
                        {' - '}
                      </Typography>
                      <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        value={`${repetitionsRangeValue[1]}`}
                        onEndEditing={() =>
                          repetitionsRangeValue[1] === ''
                            ? setRepetitionsRangeValue([exerciseList![selectedExerciseIndex].repsRange[0], 0])
                            : null
                        }
                        onChangeText={text => handleUpdateExercise(selectedExerciseIndex, 'maxReps', text)}
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
                      onChangeText={text => handleUpdateExercise(selectedExerciseIndex, 'loadIncrease', text)}
                    />
                  </View>
                  <Typography variant="h5" style={[styles.row, { backgroundColor: gray }]}>
                    Series
                  </Typography>
                  <ScrollView style={styles.seriesScrollView}>
                    {exerciseList![selectedExerciseIndex].series.map((serie, index) => (
                      <PlanCarouselItemSerie
                        key={serie.id}
                        exerciseIndex={selectedExerciseIndex}
                        exerciseId={exerciseList[selectedExerciseIndex].id}
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
                          handleUpdateExercise(selectedExerciseIndex, 'addSeries');
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
                    <Button onPress={() => setStep(1)} style={styles.button}>
                      <Typography variant="h3">Back</Typography>
                    </Button>
                  ) : (
                    <Button onPress={() => onPreviousExercisePress()} style={styles.button}>
                      <Typography variant="h3">Previous</Typography>
                    </Button>
                  )}
                  {selectedExerciseIndex === exerciseList.length - 1 ? (
                    <Button onPress={() => onSaveExercisePress()} style={[styles.button]}>
                      <Typography variant="h3">Save</Typography>
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
              </>
            )}
          </View>
        );
      default:
        return (
          <View style={{ width: '100%' }}>
            <Typography variant="h2" style={styles.text}>
              {header}
            </Typography>
            <ScrollView style={{ width: '100%' }}>
              {exerciseList && exerciseList.length > 0 && (
                <View>
                  {exerciseList.map(exercise => (
                    <View key={exercise.id} style={styles.selectedExerciseItem}>
                      <Typography variant="h4" style={styles.selectedExerciseText}>
                        {exercise.name}
                      </Typography>
                    </View>
                  ))}
                </View>
              )}
              <TouchableOpacity style={styles.addExerciseButton}>
                <Typography variant="h3" style={styles.addExerciseButtonText}>
                  + Add exercises
                </Typography>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {getStepContent(step, name, id)}
      <Modal visible={modal.display} onClose={() => setModal({ display: false, text: '' })}>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          {modal.text}
        </Typography>
      </Modal>
    </View>
  );
};

export default PlanCarouselItem;
