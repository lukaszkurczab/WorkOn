import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import planReducer from './reducers/planReducer';
import trainingReducer from './reducers/trainingReducer';
import trainingSummaryReducer from './reducers/trainingSummaryReducer';
import historyReducer from './reducers/historyReducer';
import userSlice from './slice/userSlice';
import exercisesSlice from './slice/exercisesSlice';

const appReducer = combineReducers({
  exercises: exercisesSlice,
  plans: planReducer,
  training: trainingReducer,
  trainingSummary: trainingSummaryReducer,
  history: historyReducer,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
