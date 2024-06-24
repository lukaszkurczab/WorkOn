import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './SummaryListItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography } from '../../../../components/Typography/Typography';
import { backgroundColor } from '../../../../styles/colors';

const WorkoutSummaryListItem = ({ exercise }: any) => {
  const [showSeries, setShowSeries] = useState(false);

  return (
    <TouchableOpacity onPress={() => setShowSeries(!showSeries)}>
      <View style={styles.textWrapper}>
        <Typography variant="h3" style={{ color: backgroundColor }}>
          {exercise.name}
        </Typography>
      </View>
      <View style={[styles.textWrapper, { display: showSeries ? 'flex' : 'none' }]}>
        {exercise.series.map((serie: any, index: number) => (
          <Typography key={index} variant="h4" style={{ color: backgroundColor }}>
            {serie.reps} x {serie.weight}kg
          </Typography>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutSummaryListItem;
