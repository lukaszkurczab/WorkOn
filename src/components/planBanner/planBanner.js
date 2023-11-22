import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './planBanner.styles';

const PlanBanner = ({planName, planId, img}) => {
  const navigation = useNavigation();

  const handleTilePress = (path) => {
    navigation.navigate(path);
  };

  const handleEdit = () => {
    console.log('edit' + planId)
  }

  const handleDelete = () => {
    console.log('remove' + planId)
  }

  return (
    <TouchableOpacity onPress={()=>handleTilePress('PlanTableScreen')}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/planImg.jpg')}
          style={styles.image}
          />
        <Text style={styles.text}>{planName}</Text>
        <TouchableOpacity onPress={handleEdit}>
          <Icon name='edit' size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name='trash' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    
  );
};

export default PlanBanner;