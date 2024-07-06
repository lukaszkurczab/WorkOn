import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './ChangePasswordScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import { TextInput } from '../../../../components/TextInput/TextInput';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { useIsPasswordComplex, useSelector } from '../../../../utility/hooks';
import { updateUserPassword } from '../../../../api/users';
import { RootState } from '../../../../store/store';
import { navigate } from '../../../../utility/navigate';

const ChangePasswordScreen = () => {
  const userId = useSelector((state: RootState) => state.user.id);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedNewPassword, setConfirmedNewPassword] = useState('');
  const [error, setError] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });

  const handleChangePassword = async () => {
    let hasError;

    if (newPassword !== confirmedNewPassword) {
      setError(prevError => ({ ...prevError, confirmPassword: 'Passwords do not match' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, confirmPassword: '' }));
    }

    if (!useIsPasswordComplex(newPassword)) {
      setError(prevError => ({ ...prevError, newPassword: 'Password is too simple' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, newPassword: '' }));
    }

    if (!hasError) {
      const response = await updateUserPassword({ userId, newPassword, oldPassword });

      if (response.error === 'Unauthorized') {
        setError(prevError => ({ ...prevError, oldPassword: 'Invalid password' }));
      } else {
        setError({ oldPassword: '', newPassword: '', confirmPassword: '' });
        navigate('SettingsScreen');
      }
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <TextInput
          value={oldPassword}
          error={error.oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry
          placeholder="Old password"
        />
        <TextInput
          value={newPassword}
          error={error.newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          placeholder="New password"
        />
        <View>
          <Typography variant="h5">Password should have:</Typography>
          <Typography variant="h5">{'\u2022'} At least 8 characters</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 upper case</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 lower case</Typography>
          <Typography variant="h5">{'\u2022'} At least 1 number</Typography>
        </View>
        <TextInput
          value={confirmedNewPassword}
          onChangeText={setConfirmedNewPassword}
          secureTextEntry
          placeholder="Confirm password"
          error={error.confirmPassword}
        />
        <Button onPress={handleChangePassword}>
          <Typography variant="h3">Confirm</Typography>
        </Button>
      </View>
    </Layout>
  );
};

export default ChangePasswordScreen;
