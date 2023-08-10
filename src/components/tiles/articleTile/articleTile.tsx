import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './articleTile.styles';

interface Props {
  image: string,
  title: string,
  desc: string
}

interface ImageProps {
  name: string;
  path: any;
}

  const ArticleImage: Array<ImageProps> = [
    {
      name: 'article_morning.png',
      path: require('../../../assets/article_morning.png'),
    },
    {
      name: 'article_yoga.png',
      path: require('../../../assets/article_yoga.png'),
    }
  ];

  const getImage = (name: string) => {
    const found = ArticleImage.find(e => e.name === name);
    return found ? found.path : null;
  };

const ArticleTile = ({image, title, desc}: Props) => {
  const backgroundImage = getImage(image);

  return(
  <ImageBackground source={backgroundImage} imageStyle={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  </ImageBackground>
  )
};

export default ArticleTile;