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
import { backgroundColor, gray, red } from '../../../../styles/colors';

type PlanCarouselItemProps = {
  name: string;
  id: string;
  onRemoveDay: (dayId: string) => void;
};

const PlanCarouselItem: React.FC<PlanCarouselItemProps> = ({ name, id, onRemoveDay }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);
  const exerciseList = useSelector(
    (state: RootState) => state.planCreator.newPlan.days.find(day => day.id === id)!.exercises
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

  const handleUpdateExercise = (updatedExercise: Exercise) => {
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

  const onNextExercisePress = () => {
    setSelectedExerciseIndex(selectedExerciseIndex + 1);
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
                        value={`${exerciseList![selectedExerciseIndex].repsRange[0]}`}
                        onChangeText={text =>
                          handleUpdateExercise({
                            ...exerciseList![selectedExerciseIndex],
                            repsRange: [Number(text), exerciseList![selectedExerciseIndex].repsRange[1]],
                          })
                        }
                      />
                      <Typography variant="h5" style={{ color: backgroundColor }}>
                        {' - '}
                      </Typography>
                      <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        value={`${exerciseList![selectedExerciseIndex].repsRange[1]}`}
                        onChangeText={text =>
                          handleUpdateExercise({
                            ...exerciseList![selectedExerciseIndex],
                            repsRange: [exerciseList![selectedExerciseIndex].repsRange[0], Number(text)],
                          })
                        }
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
                      value={`${exerciseList![selectedExerciseIndex].loadIncrease}`}
                      onChangeText={text =>
                        handleUpdateExercise({
                          ...exerciseList![selectedExerciseIndex],
                          loadIncrease: Number(text),
                        })
                      }
                    />
                  </View>
                  <Typography variant="h5" style={[styles.row, { backgroundColor: gray }]}>
                    Series
                  </Typography>
                  <ScrollView style={styles.seriesScrollView}>
                    {exerciseList![selectedExerciseIndex].series.map((serie, index) => (
                      <View key={index} style={{ gap: 1, backgroundColor: backgroundColor }}>
                        <View style={[styles.row, { marginTop: 1, backgroundColor: 'white' }]}>
                          <Typography variant="h5" style={{ color: backgroundColor, fontWeight: '600' }}>
                            Serie {index + 1}
                          </Typography>
                          <TouchableOpacity
                            onPress={() => handleRemoveSeries(exerciseList![selectedExerciseIndex].id, index)}
                          >
                            <FontAwesomeIcon name="trash" size={20} style={{ color: red, marginRight: 12 }} />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                          <Typography variant="h5" style={{ color: backgroundColor }}>
                            Repetitions
                          </Typography>
                          <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            value={`${serie.reps}`}
                            onChangeText={text => {
                              handleUpdateExercise({
                                ...exerciseList![selectedExerciseIndex],
                                series: exerciseList![selectedExerciseIndex].series.map((s, i) => {
                                  if (i === index) {
                                    return { ...s, reps: Number(text) };
                                  }
                                  return s;
                                }),
                              });
                            }}
                          />
                        </View>
                        <View style={styles.row}>
                          <Typography variant="h5" style={{ color: backgroundColor }}>
                            Weight [kg]
                          </Typography>
                          <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            value={`${serie.weight}`}
                            onChangeText={text => {
                              handleUpdateExercise({
                                ...exerciseList![selectedExerciseIndex],
                                series: exerciseList![selectedExerciseIndex].series.map((s, i) => {
                                  if (i === index) {
                                    return { ...s, weight: Number(text) };
                                  }
                                  return s;
                                }),
                              });
                            }}
                          />
                        </View>
                      </View>
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
                          handleUpdateExercise({
                            ...exerciseList![selectedExerciseIndex],
                            series: [
                              ...exerciseList![selectedExerciseIndex].series,
                              {
                                id: '',
                                reps: 1,
                                weight: 20,
                              },
                            ],
                          });
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
                    <Button onPress={() => setStep(0)} style={[styles.button]}>
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

  return <View style={styles.container}>{getStepContent(step, name, id)}</View>;
};

export default PlanCarouselItem;
