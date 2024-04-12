import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './userScreen.styles';

const UserScreen = () => {
  const user = useSelector(state => state.user.data);
  console.log(user);

  return (
    <View style={styles.container}>
      <Text>{user.username}</Text>
      <Text>{user.bio}</Text>
      <Text>Change password</Text>
      <Text>Records</Text>
    </View>
  );
};

export default UserScreen;
