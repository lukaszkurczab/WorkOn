import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navigation from '../../components/navigation/navigation';
import styles from './selectPublicPlansScreen.styles';

const SelectPublicPlansScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Icon name='chevron-left' size={30} style={styles.settingsIcon}></Icon>
          </TouchableOpacity>
          <Text style={styles.header}>Select Plans</Text>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default SelectPublicPlansScreen;
