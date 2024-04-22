import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './userScreen.styles';
import ChangePasswordModal from '../../components/changePasswordModal/changePasswordModal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserScreen = () => {
  const user = useSelector(state => state.user.data);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleShowChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <TouchableOpacity style={styles.changePasswordButton} onPress={handleShowChangePasswordModal}>
        <Text style={styles.changePasswordText}>Change password</Text>
      </TouchableOpacity>
      {showChangePasswordModal && <ChangePasswordModal onClose={handleCloseChangePasswordModal} />}
    </View>
  );
};

export default UserScreen;
