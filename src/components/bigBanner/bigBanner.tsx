import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
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
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => console.log('Button 1 pressed')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.buttonHalf]}
            onPress={() => console.log('Button 2 pressed')}
          >
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonRed]}
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