import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './PlanCarouselItemSerie.styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, gray, red } from '../../../../styles/colors';

type PlanCarouselItemSerieProps = {
  exerciseIndex: number;
  reps: number;
  weight: number;
  index: number;
  exerciseId: string;
  onEdit: (exerciseIndex: number, property: string, newValue: number, index: number) => void;
  onRemove: (exerciseId: string, index: number) => void;
};

const PlanCarouselItemSerie: React.FC<PlanCarouselItemSerieProps> = ({
  exerciseIndex,
  exerciseId,
  reps,
  weight,
  index,
  onRemove,
  onEdit,
}) => {
  const [repsValue, setRepsValue] = useState<number | string>(reps);
  const [weightValue, setWeightValue] = useState<number | string>(weight);

  const handleEdit = (exerciseIndex: number, property: string, newValue: string, index: number) => {
    if (newValue === '') {
      setRepsValue('');
      onEdit(exerciseIndex, property, 0, index);
    } else {
      setRepsValue(newValue);
      onEdit(exerciseIndex, property, Number(newValue), index);
    }
  };

  const handleRepsChange = (text: string) => {
    if (text === '') {
      onEdit(exerciseIndex, 'serieReps', 0, index);
    } else {
      onEdit(exerciseIndex, 'serieReps', Number('text'), index);
    }
    setRepsValue(text);
  };

  const handleWeightChange = (text: string) => {
    if (text === '') {
      onEdit(exerciseIndex, 'serieWeight', 0, index);
    } else {
      onEdit(exerciseIndex, 'serieWeight', Number('text'), index);
    }
    setWeightValue(text);
  };

  return (
    <View key={index} style={{ gap: 1, backgroundColor: backgroundColor }}>
      <View style={[styles.row, { marginTop: 1, backgroundColor: 'white' }]}>
        <Typography variant="h5" style={{ color: backgroundColor, fontWeight: '600' }}>
          Serie {index + 1}
        </Typography>
        <TouchableOpacity onPress={() => onRemove(exerciseId, index)}>
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
          value={`${repsValue}`}
          onEndEditing={() => (repsValue === '' ? setRepsValue(0) : null)}
          onChangeText={text => handleRepsChange(text)}
        />
      </View>
      <View style={styles.row}>
        <Typography variant="h5" style={{ color: backgroundColor }}>
          Weight [kg]
        </Typography>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={`${weightValue}`}
          onEndEditing={() => (weightValue === '' ? setWeightValue(0) : null)}
          onChangeText={text => handleWeightChange(text)}
        />
      </View>
    </View>
  );
};

export default PlanCarouselItemSerie;
