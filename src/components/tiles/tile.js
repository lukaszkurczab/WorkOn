import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './tile.styles';

  const TileImage = [
    {
      name: 'articles_calisthenic.jpg',
      path: require('../../assets/articles_calisthenic.jpg'),
    },
    {
      name: 'articles_crossFit.jpg',
      path: require('../../assets/articles_crossFit.jpg'),
    },
    {
      name: 'articles_diet.jpg',
      path: require('../../assets/articles_diet.jpg'),
    },
    {
      name: 'articles_gym.jpg',
      path: require('../../assets/articles_gym.jpg'),
    },
    {
      name: 'articles_health.jpg',
      path: require('../../assets/articles_health.jpg'),
    },
    {
      name: 'articles_mindfullness.jpg',
      path: require('../../assets/articles_mindfullness.jpg'),
    },
  ];

  
  const getImage = (name) => {
    const found = TileImage.find(e => e.name === name);
    return found ? found.path : null;
  };

const Tile = ({ text, icon, path, version}) => {
  const navigation = useNavigation();

  const handleTilePress = () => {
    navigation.navigate(path);
  };

  const tileImage = getImage(icon);

  switch (version){
    case 'icon':
      return(
        <TouchableOpacity style={styles.containerIcon} onPress={handleTilePress}>
          <Icon name={icon} size={45} style={styles.icon} />
          <Text style={styles.textIcon}>{text}</Text>
        </TouchableOpacity>
      )
    case 'image':
      return(
        <TouchableOpacity style={styles.containerImage} onPress={handleTilePress}>
          <Image source={tileImage} style={styles.image} />
          <Text style={styles.textImage}>{text}</Text>
        </TouchableOpacity>
      )
    default:
      return(
      <TouchableOpacity style={styles.containerIcon}>
        <Text style={styles.textIcon}>{text}</Text>
      </TouchableOpacity>
      )
  }
};

export default Tile;