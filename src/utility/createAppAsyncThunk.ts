import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = <Returned, ThunkArg>(
  type: string,
  asyncFunction: (args: ThunkArg) => Promise<Returned>
) => {
  return createAsyncThunk<Returned, ThunkArg>(type, async (args, { rejectWithValue }) => {
    try {
      const response = await asyncFunction(args);
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  });
};
