import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './Popup.styles';

const Popup = ({ message, onClose }: { message: string; onClose: () => void }) => {
  const [visible, setVisible] = useState(true);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      handleClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      onClose();
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.popup}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
};

export default Popup;
