import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import ButtonBig from '../buttons/buttonBig/buttonBig'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './bigBanner.styles';

const BigBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
            source={require('../../assets/work.png')}
            style={styles.image}
          />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBig >
          Start
          <Icon name="play" size={16} style={styles.icon} />
        </ButtonBig>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => console.log('Button 2 pressed')}
          >
            <Text style={styles.buttonText}>Move</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Button 3 pressed')}
          >
            <Text style={styles.buttonText}>Button 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BigBanner;