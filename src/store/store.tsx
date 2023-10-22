import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from './reducers/exerciseReducer';
import planReducer from './reducers/planReducer';

export const store = configureStore({
  reducer: {
    exercises: exerciseReducer,
    plans: planReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch