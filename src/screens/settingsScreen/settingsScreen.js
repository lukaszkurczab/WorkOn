import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import { changeUsername, updatePassword } from '../../store/actions/userActions';
import { LOGOUT } from '../../store/slice/userSlice';
import { SET_REMEMBER_ME } from '../../store/slice/sessionSlice';
import { secondaryColor } from '../../styles/colors';
import styles from './settingsScreen.styles';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.data);
  const [newUsername, setNewUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
  const [confirmedNewPassword, setConfirmedNewPassword] = useState('');
  const [showChangeUsernameInput, setShowChangeUsernameInput] = useState(false);
  const [showChangePasswordInput, setShowChangePasswordInput] = useState(false);

  const handleShowChangeUsername = () => {
    setShowChangeUsernameInput(!showChangeUsernameInput);
  };

  const handleChangeUsername = () => {
    dispatch(
      changeUsername({
        userId: userData.id,
        newUsername: newUsername,
      })
    );
  };

  const handleShowChangePassword = () => {
    setShowChangePasswordInput(!showChangePasswordInput);
  };

  const handleChangePassword = () => {
    if (newPassword === confirmedNewPassword) {
      setShowPasswordMatchError(false);
      dispatch(updatePassword({ userId: userData.id, newPassword: newPassword, oldPassword: oldPassword }));
    } else {
      setShowPasswordMatchError(true);
    }
  };

  const handleSelectRecords = () => {
    navigation.navigate('SelectRecordsScreen');
  };

  const handlePublicWorkouts = () => {
    navigation.navigate('SelectPublicWorkoutsScreen');
  };

  const handlePublicPlans = () => {
    navigation.navigate('SelectPublicPlansScreen');
  };

  const handleLogout = () => {
    dispatch(SET_REMEMBER_ME(false));
    dispatch(LOGOUT());
    navigation.navigate('LoginScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.button}>
            <Text style={styles.header}>Settings</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleShowChangeUsername}>
              <Text style={styles.text}>Change username</Text>
            </TouchableOpacity>
            {showChangeUsernameInput && (
              <View>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={secondaryColor}
                  placeholder="New username"
                  value={newUsername}
                  onChangeText={setNewUsername}
                />
                <TouchableOpacity style={styles.confirmButton} onPress={handleChangeUsername}>
                  <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleShowChangePassword}>
              <Text style={styles.text}>Change password</Text>
            </TouchableOpacity>
            {showChangePasswordInput && (
              <View>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={secondaryColor}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  secureTextEntry
                  placeholder="Old password"
                />
                <TextInput
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholderTextColor={secondaryColor}
                  secureTextEntry
                  placeholder="New password"
                />
                <TextInput
                  style={styles.input}
                  value={confirmedNewPassword}
                  onChangeText={setConfirmedNewPassword}
                  placeholderTextColor={secondaryColor}
                  secureTextEntry
                  placeholder="Confirm password"
                />
                {showPasswordMatchError && <Text style={{ color: 'red' }}>Passwords doesn't match</Text>}
                <TouchableOpacity style={styles.confirmButton} onPress={handleChangePassword}>
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
