import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './workoutScreen.styles';

const UserScreen = () => {
  const user = useSelector(state => state.user.data);

  return (
    <View style={styles.container}>
      <Text>{user.username}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
};

export default UserScreen;
