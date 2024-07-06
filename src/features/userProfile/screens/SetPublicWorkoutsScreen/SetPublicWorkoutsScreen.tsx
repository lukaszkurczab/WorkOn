import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './SetPublicWorkoutsScreen.styles';
import Layout from '../../../../components/Layout/Layout';

const SetPublicWorkoutsScreen = () => {
  const handleChangePublic = () => {};

  const handleConfirm = () => {};

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Select workouts</Text>
          <View></View>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default SetPublicWorkoutsScreen;
