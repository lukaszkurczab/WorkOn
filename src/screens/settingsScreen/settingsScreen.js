import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Navigation from '../../components/navigation/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './settingsScreen.styles';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user.data);
  const handlePress = () => {};

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
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.header}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Change username</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Select records</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Select public workouts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Select public plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SettingsScreen;
