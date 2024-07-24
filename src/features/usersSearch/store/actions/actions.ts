import { createAppAsyncThunk } from '../../../../utility/createAppAsyncThunk';
import {
  addSearchHistoryItemToUser,
  removeSearchHistoryItemFromUser,
  clearSearchHistoryForUser,
  searchUsers,
} from '../../../../api/users';
import { SearchHistoryItem } from '../../../../types/users';

interface AddSearchHistoryItemData {
  userId: string;
  searchHistoryItem: SearchHistoryItem;
}

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

export const addSearchHistoryItem = createAppAsyncThunk<SearchHistoryItem, AddSearchHistoryItemData>(
  'user/addSearchHistoryItem',
  async ({ userId, searchHistoryItem }) => {
    return await addSearchHistoryItemToUser({ userId, searchHistoryItem });
  }
);

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
