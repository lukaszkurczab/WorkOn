import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import styles from './UserSearchScreen.styles';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Typography } from '../../../../components/Typography/Typography';
import { blue, primaryColor } from '../../../../styles/colors';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { SearchHistoryItem } from '../../../../types/users';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  clearSearchHistory,
  removeSearchHistoryItem,
  searchUsersByString,
  getUserPublicData,
} from '../../store/actions/actions';
import { useDispatch } from '../../../../utility/hooks';
import { CLEAR_USERS_FOUND } from '../../store/slice/slice';
import { navigate } from '../../../../utility/navigate';

const UserSearchScreen = () => {
  const dispatch = useDispatch();
  const userSearchHistory = useSelector((state: RootState) => state.user.searchHistory);
  const userId = useSelector((state: RootState) => state.user.id);
  const usersFound = useSelector((state: RootState) => state.usersSearch.usersFound);
  const [searchText, setSearchText] = useState('');

  const handleSearchUsers = (newSearchText: string) => {
    setSearchText(newSearchText);
    if (newSearchText.trim()) {
      dispatch(searchUsersByString({ userId, query: newSearchText, maxResults: 10 }));
    } else {
      dispatch(CLEAR_USERS_FOUND());
    }
  };

  const handleSelectUser = async (searchHistoryItem: SearchHistoryItem) => {
    await dispatch(getUserPublicData({ userId, searchHistoryItem }));
    navigate('UserPublicProfileScreen');
  };

  const handleClearHistory = () => {
    dispatch(clearSearchHistory(userId));
  };

  const handleRemoveHistoryItem = (itemId: string) => {
    dispatch(removeSearchHistoryItem({ userId, itemId }));
  };

  return (
    <Layout showHeader={false}>
      <View style={styles.container}>
        <SearchInput searchText={searchText} setSearchText={handleSearchUsers} />
        {!searchText && (
          <>
            <View style={styles.row}>
              <Typography variant="h4">Search history</Typography>
              <Button variant="text" onPress={handleClearHistory}>
                <Typography variant="h4" style={{ color: blue }}>
                  Clear history
                </Typography>
              </Button>
            </View>
            {userSearchHistory &&
              userSearchHistory.map((item: SearchHistoryItem) => (
                <TouchableOpacity style={styles.row} key={item.id} onPress={() => handleSelectUser(item)}>
                  <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                    <Image source={require('../../../../../assets/icon.png')} style={styles.avatar} />
                    <Typography variant="h3">{item.name}</Typography>
                  </View>
                  <Button variant="text" onPress={() => handleRemoveHistoryItem(item.id)} style={styles.removeIcon}>
                    <Icon name="times" size={24} color={primaryColor} />
                  </Button>
                </TouchableOpacity>
              ))}
          </>
        )}
        {searchText &&
          usersFound &&
          usersFound.map((item: SearchHistoryItem) => {
            return (
              <TouchableOpacity style={styles.row} key={item.id} onPress={() => handleSelectUser(item)}>
                <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                  <Image source={require('../../../../../assets/icon.png')} style={styles.avatar} />
                  <Typography variant="h3">{item.name}</Typography>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </Layout>
  );
};

export default UserSearchScreen;
