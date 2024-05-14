import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = (type, asyncFunction) => {
  return createAsyncThunk(type, async (args, { rejectWithValue }) => {
    try {
      const response = await asyncFunction(args);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
};
