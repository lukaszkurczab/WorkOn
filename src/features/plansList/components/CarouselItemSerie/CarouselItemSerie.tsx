import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './CarouselItemSeries.styles';
import { backgroundColor } from '../../../../styles/colors';

type PlanCarouselItemSerieProps = {
  reps: number;
  weight: number;
  index: number;
};

const PlanCarouselItemSerie: React.FC<PlanCarouselItemSerieProps> = ({ reps, weight, index }) => {
  return (
    <View key={index} style={{ gap: 1, backgroundColor: backgroundColor }}>
      <View style={[styles.row, { marginTop: 1, backgroundColor: 'white' }]}>
        <Typography variant="h5" style={{ color: backgroundColor, fontWeight: '600' }}>
          Serie {index + 1}
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="h5" style={{ color: backgroundColor }}>
          Repetitions
        </Typography>
        <Typography variant="h5" style={{ color: backgroundColor }}>
          {reps}
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="h5" style={{ color: backgroundColor }}>
          Weight [kg]
        </Typography>
        <Typography variant="h5" style={{ color: backgroundColor }}>
          {weight}
        </Typography>
      </View>
    </View>
  );
};

export default PlanCarouselItemSerie;
