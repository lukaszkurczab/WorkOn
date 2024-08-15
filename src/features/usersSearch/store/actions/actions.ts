import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';
import {
  removeSearchHistoryItemFromUser,
  clearSearchHistoryForUser,
  searchUsers,
  searchUser,
} from '../../../../api/users';
import { SearchHistoryItem, UserPublicData } from '../../../../types/users';

interface RemoveSearchHistoryItemData {
  userId: string;
  itemId: string;
}

interface SearchUsersParams {
  userId: string;
  query: string;
  maxResults?: number;
}

export interface SearchUsersResponse {
  users: SearchHistoryItem[];
}

export const removeSearchHistoryItem = createAppAsyncThunk<
  { message: string; itemId: string },
  RemoveSearchHistoryItemData
>('user/removeSearchHistoryItem', async ({ userId, itemId }) => {
  await removeSearchHistoryItemFromUser({ userId, itemId });
  return { message: 'Item removed', itemId };
});

export const clearSearchHistory = createAppAsyncThunk<{ message: string }, string>(
  'user/clearSearchHistory',
  async (userId: string) => {
    return await clearSearchHistoryForUser(userId);
  }
);

export const searchUsersByString = createAppAsyncThunk<SearchUsersResponse, SearchUsersParams>(
  'users/searchUsers',
  async ({ userId, query, maxResults }) => {
    const users = await searchUsers(userId, query, maxResults);
    return { users };
  }
);

export const getUserPublicData = createAppAsyncThunk<
  UserPublicData,
  { userId: string; searchHistoryItem: SearchHistoryItem }
>('user/getUserPublicData', async ({ userId, searchHistoryItem }, { rejectWithValue }) => {
  try {
    const detailedUserData = await searchUser({
      userId,
      searchHistoryItem,
    });
    return detailedUserData;
  } catch (error) {
    return rejectWithValue(error);
  }
});
