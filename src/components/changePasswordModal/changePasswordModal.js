import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './changePasswordModal.styles';
import { CHANGE_PASSWORD } from '../../store/slice/userSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChangePasswordModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleConfirmChangePassword = () => {
    dispatch(CHANGE_PASSWORD({ oldPassword, newPassword, confirmNewPassword }));
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalWrapper}>
        <TextInput
          style={styles.input}
          placeholder='Old password'
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          style={styles.input}
          placeholder='New password'
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm new password'
          secureTextEntry={true}
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirmChangePassword}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePasswordModal;
