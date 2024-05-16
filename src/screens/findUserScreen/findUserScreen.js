import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/navigation/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './findUsersScreen.styles';

const FindUsersScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.data);
  const [serched, setSearched] = useState('');

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.searchWrapper}>
            <TextInput style={styles.input} defaultValue={serched} onChangeText={value => setSearched(value)} />
            <Icon name='search' style={styles.icon} />
          </View>
        </ScrollView>
      </View>
    </Navigation>
  );
};

export default FindUsersScreen;
