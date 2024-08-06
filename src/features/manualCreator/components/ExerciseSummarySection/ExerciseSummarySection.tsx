import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import styles from './ExerciseSummarySection.styles';
import { backgroundColor, gray } from '../../../../styles/colors';
import { Exercise } from '../../../../types/exercises';

type ExerciseSummarySectionProps = {
  exercise: Exercise;
};

const ExerciseSummarySection = ({ exercise }: ExerciseSummarySectionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.listHeader} onPress={() => setShowDetails(!showDetails)}>
        <Typography variant="h3" style={styles.listText}>
          {exercise.name}
        </Typography>
      </TouchableOpacity>
      {showDetails && (
        <View style={{ width: '100%' }}>
          <View style={styles.editWrapper}>
            <View style={[styles.row, { backgroundColor: gray }]}>
              <Typography variant="h5" style={{ color: backgroundColor }}>
                Repetitions range
              </Typography>
              <View style={{ flexDirection: 'row' }}>
                <Typography variant="h4" style={{ color: backgroundColor }}>
                  {exercise.repsRange[0] + ' - ' + exercise.repsRange[1]}
                </Typography>
              </View>
            </View>
            <View style={[styles.row, { backgroundColor: gray }]}>
              <Typography variant="h5" style={{ color: backgroundColor }}>
                Weight increase [kg]
              </Typography>
              <Typography variant="h4" style={{ color: backgroundColor }}>
                {exercise.loadIncrease}
              </Typography>
            </View>
            {exercise.series.map((serie, index) => (
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
                  <Typography variant="h4" style={{ color: backgroundColor }}>
                    {serie.reps}
                  </Typography>
                </View>
                <View style={styles.row}>
                  <Typography variant="h5" style={{ color: backgroundColor }}>
                    Weight [kg]
                  </Typography>
                  <Typography variant="h4" style={{ color: backgroundColor }}>
                    {serie.weight}
                  </Typography>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default ExerciseSummarySection;
