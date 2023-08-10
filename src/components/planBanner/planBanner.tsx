import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './planBanner.styles';

interface Props {
  planName: string,
  img: string,
}

const PlanBanner = ({planName, img}: Props) => {
  const navigation = useNavigation();

  const handleTilePress = (path: string) => {
    navigation.navigate(path as never);
  };

  return (
    <TouchableOpacity onPress={()=>handleTilePress('PlanTableScreen')}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/planImg.jpg')}
          style={styles.image}
          />
        <Text style={styles.text}>{planName}</Text>
        <TouchableOpacity>
          <Icon name='edit' size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='trash' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    
  );
};

export default PlanBanner;