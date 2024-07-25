import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchHistoryItem, UserPublicData } from '../../../../types/users';
import { getUserPublicData, searchUsersByString, SearchUsersResponse } from '../actions/actions';

type UsersSearchState = {
  usersFound: SearchHistoryItem[];
  isLoading: boolean;
  error: string;
  selectedUser: UserPublicData;
};

const initialState: UsersSearchState = {
  usersFound: [],
  isLoading: false,
  selectedUser: {
    userId: '',
    username: '',
    plans: [],
    history: [],
  },
  error: '',
};

const usersSearchSlice = createSlice({
  name: 'usersSearch',
  initialState,
  reducers: {
    CLEAR_USERS_FOUND: state => {
      state.usersFound = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchUsersByString.fulfilled, (state, action: PayloadAction<SearchUsersResponse>) => {
        state.usersFound = action.payload.users;
      })
      .addCase(getUserPublicData.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      });
  },
});

export const { CLEAR_USERS_FOUND } = usersSearchSlice.actions;
export default usersSearchSlice.reducer;
