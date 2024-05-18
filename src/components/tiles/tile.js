import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './tile.styles';

const Tile = ({ text, icon, path, version }) => {
  const navigation = useNavigation();

  const handleTilePress = () => {
    navigation.navigate(path);
  };

  switch (version) {
    case 'icon':
      return (
        <TouchableOpacity style={styles.containerIcon} onPress={handleTilePress}>
          <Icon name={icon} size={45} style={styles.icon} />
          <Text style={styles.textIcon}>{text}</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity style={styles.containerIcon}>
          <Text style={styles.textIcon}>{text}</Text>
        </TouchableOpacity>
      );
  }
};

export default Tile;
