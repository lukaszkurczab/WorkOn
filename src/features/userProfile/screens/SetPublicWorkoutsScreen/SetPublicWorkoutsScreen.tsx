import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './SetPublicWorkoutsScreen.styles';
import Layout from '../../../../components/Layout/Layout';
import Button from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';
import { useDispatch, useFormatDate, useSelector } from '../../../../utility/hooks';
import { RootState } from '../../../../store/store';
import { HistoryItem } from '../../../../types/history';
import Icon from 'react-native-vector-icons/FontAwesome';
import { gray, primaryColor } from '../../../../styles/colors';
import { navigate } from '../../../../utility/navigate';
import { UPDATE_HISTORY } from '../../../../store/slice/userSlice';
import { setPublicHistoryItem } from '../../../../api/users';
import ToggleSwitch from '../../../../components/ToggleSwitch/ToggleSwitch';

const SetPublicWorkoutsScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [defaultHistoryPublicType, setDefaultHistoryPublicType] = useState<'public' | 'private'>(
    user.settings.defaultHistoryPublicType
  );
  const [history, setHistory] = useState<HistoryItem[]>([...user.history]);

  const handleChangePublic = ({ isPublic, historyItemId }: { isPublic: boolean; historyItemId: string }) => {
    const selectedHistoryItemIndex = history.findIndex(item => item.id === historyItemId);

    history[selectedHistoryItemIndex] = {
      ...history[selectedHistoryItemIndex],
      publicType: isPublic ? 'private' : 'public',
    };
    setHistory([...history]);
  };

  const handleConfirm = async () => {
    const response = await setPublicHistoryItem({
      userId: user.id,
      items: history,
      publicType: defaultHistoryPublicType,
    });

    if (response.error === null) {
      dispatch(UPDATE_HISTORY(history));
      navigate('SettingsScreen');
    }
  };

  const handleChangeDefaultHistoryPublicType = () => {
    if (defaultHistoryPublicType === 'public') {
      setDefaultHistoryPublicType('private');
    } else {
      setDefaultHistoryPublicType('public');
    }
  };

  return (
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Select workouts
        </Typography>
        <View style={styles.toggleSwitchWrapper}>
          <Typography variant="h3">Public plans by default</Typography>
          <ToggleSwitch
            isOn={defaultHistoryPublicType === 'public'}
            handleToggle={handleChangeDefaultHistoryPublicType}
          />
        </View>
        {history.map(historyItem => (
          <View key={historyItem.id} style={styles.listItem}>
            <View>
              <Typography variant="h3">
                {historyItem.plan} - {historyItem.day}
              </Typography>
              <Typography variant="h4" style={{ color: gray }}>
                {historyItem.exercises.length} exercises · {useFormatDate(historyItem.date)}
              </Typography>
            </View>
            {historyItem.publicType === 'public' ? (
              <TouchableOpacity onPress={() => handleChangePublic({ isPublic: true, historyItemId: historyItem.id })}>
                <Icon name="eye" size={24} style={{ color: primaryColor }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleChangePublic({ isPublic: false, historyItemId: historyItem.id })}>
                <Icon name="eye-slash" size={24} style={{ color: primaryColor }} />
              </TouchableOpacity>
            )}
          </View>
        ))}
        <Button onPress={handleConfirm}>
          <Typography variant="h3">Confirm</Typography>
        </Button>
      </ScrollView>
    </Layout>
  );
};

export default SetPublicWorkoutsScreen;
