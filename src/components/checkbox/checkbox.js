import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './checkbox.styles';

const Checkbox = ({ selected, onClick, children }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onClick()}>
      <View style={styles.iconWrapper}>
        {selected ? (
          <Text>
            <Icon name='check' size={14} style={styles.icon} />
          </Text>
        ) : null}
      </View>
      {children}
    </TouchableOpacity>
  );
};

export default Checkbox;
