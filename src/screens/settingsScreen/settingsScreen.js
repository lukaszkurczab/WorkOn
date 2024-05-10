import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Navigation from '../../components/navigation/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { secondaryColor } from '../../styles/colors';
import styles from './settingsScreen.styles';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [showChangeUsernameInput, setShowChangeUsernameInput] = useState(false);
  const [showChangePasswordInput, setShowChangePasswordInput] = useState(false);
  const handleChangeUsername = () => {
    setShowChangeUsernameInput(!showChangeUsernameInput);
  };
  const handleChangePassword = () => {
    setShowChangePasswordInput(!showChangePasswordInput);
  };
  const handleSelectRecords = () => {};
  const handlePublicWorkouts = () => {};
  const handlePublicPlans = () => {};
  const handleLogout = () => {};

  const handleBack = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Icon name='chevron-left' size={30} style={styles.settingsIcon}></Icon>
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.header}>Settings</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleChangeUsername}>
              <Text style={styles.text}>Change username</Text>
            </TouchableOpacity>
            {showChangeUsernameInput && (
              <View>
                <TextInput style={styles.input} placeholderTextColor={secondaryColor} placeholder='New username' />
                <TouchableOpacity style={styles.confirmButton} onPress={handleChangeUsername}>
                  <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
              <Text style={styles.text}>Change password</Text>
            </TouchableOpacity>
            {showChangePasswordInput && (
              <View>
                <TextInput style={styles.input} placeholderTextColor={secondaryColor} secureTextEntry placeholder='Old password' />
                <TextInput style={styles.input} placeholderTextColor={secondaryColor} secureTextEntry placeholder='New password' />
                <TextInput style={styles.input} placeholderTextColor={secondaryColor} secureTextEntry placeholder='Confirm password' />
                <TouchableOpacity style={styles.confirmButton} onPress={handleChangeUsername}>
                  <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSelectRecords}>
            <Text style={styles.text}>Select records</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePublicWorkouts}>
            <Text style={styles.text}>Select public workouts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePublicPlans}>
            <Text style={styles.text}>Select public plans</Text>
          </TouchableOpacity>
          <View style={styles.logoutButton}>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SettingsScreen;
