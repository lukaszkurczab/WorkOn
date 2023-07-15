import React, { ReactNode } from 'react';
import { Text, View, Image  } from 'react-native';
import styles from './header.styles';

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/work.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>WorkOn</Text>
        </View>
      </View>
    </>
  );
};

export default Header;