import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { Typography } from '../../../../components/Typography/Typography';
import { navigate } from '../../../../utility/navigate';

const ProfileScreen = () => {
  const maxHistoryItems = useState(5);

  const handleSettings = () => {
    navigate('SettingsScreen');
  };

  return (
    <Layout showHeader={false}>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
          <Icon name="cog" size={30} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.contentWrapper}>
          <View style={styles.userDataWrapper}>
            <View style={styles.userPhotoWrapper}>
              <Icon name="user" size={64} style={styles.userPhoto} />
            </View>
            <Typography variant="h3">Name</Typography>
          </View>
          <Text style={styles.title}>Personal records</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;
