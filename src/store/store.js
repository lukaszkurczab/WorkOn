import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import planReducer from './reducers/planReducer';
import trainingReducer from './reducers/trainingReducer';
import atlasReducer from './reducers/atlasReducer';
import userSlice from './slice/userSlice';
import exercisesSlice from './slice/exercisesSlice';
import sessionReducer from './reducers/sessionReducer';

const appReducer = combineReducers({
  exercises: exercisesSlice,
  plans: planReducer,
  training: trainingReducer,
  atlas: atlasReducer,
  user: userSlice,
  session: sessionReducer,
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
