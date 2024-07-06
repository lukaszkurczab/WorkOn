import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './ChangeUsernameScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { useDispatch } from '../../../../utility/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { updateUserUsername } from '../../../../api/users';
import { navigate } from '../../../../utility/navigate';
import { CHANGE_USERNAME } from '../../../../store/slice/userSlice';

const ChangeUsernameScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const [newUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ usernameError: '', passwordError: '' });

  const handleConfirm = async () => {
    try {
      const response = await updateUserUsername({ userId, newUsername, password });

      if (response.error === 'Invalid password') {
        setError({ usernameError: '', passwordError: 'Invalid password' });
      } else if (response.error === 'Username is already taken') {
        setError({ usernameError: 'Username is already taken', passwordError: '' });
      } else {
        dispatch(CHANGE_USERNAME(response));
        navigate('SettingsScreen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <TextInput
          error={error.usernameError}
          placeholder={'New username'}
          value={newUsername}
          onChangeText={setNewUsername}
        />
        <TextInput
          error={error.passwordError}
          placeholder={'Password to confirm'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={handleConfirm}>
          <Typography variant="h3">Confirm</Typography>
        </Button>
      </View>
    </Layout>
  );
};

export default ChangeUsernameScreen;
