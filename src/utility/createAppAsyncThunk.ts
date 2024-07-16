import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = <Returned, ThunkArg>(
  type: string,
  asyncFunction: (
    args: ThunkArg,
    extra: { getState: () => any; rejectWithValue: (value: any) => any }
  ) => Promise<Returned>
) => {
  return createAsyncThunk<Returned, ThunkArg>(type, async (args, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    try {
      const response = await asyncFunction(args, { getState, rejectWithValue });
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  });
};
