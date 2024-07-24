import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchHistoryItem } from '../../../../types/users';
import { searchUsersByString, SearchUsersResponse } from '../actions/actions';

type UsersSearchState = {
  usersFound: SearchHistoryItem[];
};

const initialState: UsersSearchState = {
  usersFound: [],
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
    builder.addCase(searchUsersByString.fulfilled, (state, action: PayloadAction<SearchUsersResponse>) => {
      state.usersFound = action.payload.users;
    });
  },
});

export const { CLEAR_USERS_FOUND } = usersSearchSlice.actions;
export default usersSearchSlice.reducer;
