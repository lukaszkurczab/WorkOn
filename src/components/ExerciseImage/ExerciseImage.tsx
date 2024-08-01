import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { imageMap } from '../../assets/exercises/_imageMap';
import styles from './ExerciseImage.styles';

interface ExerciseImageProps {
  imageName: string;
}

const ExerciseImage: React.FC<ExerciseImageProps> = ({ imageName }) => {
  const [index, setIndex] = useState(0);
  const fadeAnim = new Animated.Value(1);

  const images = imageMap[imageName] || [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();

      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [fadeAnim, images.length]);

  return (
    <View style={styles.container}>
      {images.length > 0 && <Animated.Image source={images[index]} style={[styles.image, { opacity: fadeAnim }]} />}
    </View>
  );
};

export default ExerciseImage;
