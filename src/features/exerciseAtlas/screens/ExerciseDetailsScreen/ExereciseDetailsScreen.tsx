import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './ExerciseDetailsScreen.styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../utility/navigate';
import { Typography } from '../../../../components/Typography/Typography';
import Layout from '../../../../components/Layout/Layout';

type ExerciseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ExerciseDetailsScreen'>;

const ExerciseDetailsScreen = () => {
  const route = useRoute<ExerciseDetailsScreenRouteProp>();

  if (!route.params || !route.params.exercise) {
    return (
      <View>
        <Typography variant="h2">No exercise data provided.</Typography>
      </View>
    );
  }

  const { exercise } = route.params;

  return (
    <Layout headerText={exercise.name}>
      <ScrollView>
        <View style={{ gap: 16 }}>
          <Image source={require('../../../../assets/exercises/dips.jpg')} style={styles.image} />
          <View>
            <Typography variant="h3">Start position:</Typography>
            <Typography variant="h4" style={{ textAlign: 'justify' }}>
              {exercise.startPosition}
            </Typography>
          </View>
          <View>
            <Typography variant="h3">Process:</Typography>
            <Typography variant="h4" style={{ textAlign: 'justify' }}>
              {exercise.process}
            </Typography>
          </View>
          <View>
            <Typography variant="h3">Main muscles:</Typography>
            {exercise.muscleMain.map((muscle: string[], index: number) => (
              <Typography variant="h4" key={index}>
                {muscle}
              </Typography>
            ))}
          </View>
          {exercise.muscleAdditional.length > 0 && (
            <View>
              <Typography variant="h3">Additional muscles:</Typography>
              {exercise.muscleAdditional.map((muscle: string[], index: number) => (
                <Typography variant="h4" key={index}>
                  {muscle}
                </Typography>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ExerciseDetailsScreen;
