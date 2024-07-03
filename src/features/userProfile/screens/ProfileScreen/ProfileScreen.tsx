import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './ProfileScreen.styles';
import Layout from '../../../../components/Layout/Layout';

const ProfileScreen = () => {
  const maxHistoryItems = useState(5);

  const handleSettings = () => {};

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <Icon name="cog" size={30} style={styles.settingsIcon}></Icon>
          </TouchableOpacity>
          <Text style={styles.title}>Personal records</Text>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ProfileScreen;
