import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './SeriesEditSection.styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, gray, red } from '../../../../styles/colors';

type SeriesEditSectionProps = {
  reps: number;
  weight: number;
  index: number;
  exerciseId: string;
  onEdit: (property: string, newValue: number, index: number) => void;
  onRemove: (exerciseId: string, index: number) => void;
};

const SeriesEditSection = ({ exerciseId, reps, weight, index, onRemove, onEdit }: SeriesEditSectionProps) => {
  const [repsValue, setRepsValue] = useState<number | string>(reps);
  const [weightValue, setWeightValue] = useState<number | string>(weight);

  useEffect(() => {
    setRepsValue(reps);
    setWeightValue(weight);
  }, [exerciseId]);

  const handleRepsChange = (text: string) => {
    const newValue = text === '' ? 0 : Number(text);
    onEdit('serieReps', newValue, index);
    setRepsValue(text);
  };

  const handleWeightChange = (text: string) => {
    const newValue = text === '' ? 0 : Number(text);
    onEdit('serieWeight', newValue, index);
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
          onEndEditing={() => repsValue === '' && setRepsValue(0)}
          onChangeText={handleRepsChange}
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
          onEndEditing={() => weightValue === '' && setWeightValue(0)}
          onChangeText={handleWeightChange}
        />
      </View>
    </View>
  );
};

export default SeriesEditSection;
