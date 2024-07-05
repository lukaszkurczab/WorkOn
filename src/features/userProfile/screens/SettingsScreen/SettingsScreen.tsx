import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './SettingsScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { navigate } from '../../../../utility/navigate';
import { Typography } from '../../../../components/Typography/Typography';

const SettingsScreen = () => {
  const handleChangeUsername = () => {
    console.log('ChangeUsernameScreen');
  };

  const handleChangePassword = () => {
    console.log('ChangePasswordScreen');
  };

  const handleSelectRecords = () => {
    console.log('SetRecordsScreen');
  };

  const handlePublicWorkouts = () => {
    console.log('SetPublicWorkoutsScreen');
  };

  const handlePublicPlans = () => {
    console.log('SetPublicPlansScreen');
  };

  const handleLogout = () => {
    console.log('LoginScreen');
  };

  return (
    <Layout showHeader={false}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Typography variant="h2">Settings</Typography>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleChangeUsername}>
            <Typography variant="h3" style={styles.text}>
              Change username
            </Typography>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Typography variant="h3" style={styles.text}>
              Change password
            </Typography>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSelectRecords}>
          <Typography variant="h3" style={styles.text}>
            Select records
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePublicWorkouts}>
          <Typography variant="h3" style={styles.text}>
            Select public workouts
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePublicPlans}>
          <Typography variant="h3" style={styles.text}>
            Select public plans
          </Typography>
        </TouchableOpacity>
        <View style={styles.logoutButton}>
          <TouchableOpacity onPress={handleLogout}>
            <Typography variant="h3" style={styles.logout}>
              Logout
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default SettingsScreen;
