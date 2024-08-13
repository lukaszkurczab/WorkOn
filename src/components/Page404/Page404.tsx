import React from 'react';
import { View } from 'react-native';
import { navigate } from '../../utility/navigate';
import styles from './Page404.styles';
import { Typography } from '../Typography/Typography';
import Button from '../Button/Button';

const Page404 = () => {
  return (
    <View style={styles.container}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h3">Looks like you need a spot</Typography>
      <Button onPress={() => navigate('MainScreen')}>
        <Typography variant="h3">Back to main</Typography>
      </Button>
    </View>
  );
};

export default Page404;
