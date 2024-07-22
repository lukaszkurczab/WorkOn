import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import trainingReducer from '../features/training/store/slice/slice';
import userReducer from './slice/userSlice';
import loginReducer from '../features/login/store/slice/slice';
import plansReducer from '../features/plansList/store/slice/slice';
import ManualCreatorReducer from '../features/manualCreator/store/slice/slice';

const rootReducer = combineReducers({
  plans: plansReducer,
  training: trainingReducer,
  user: userReducer,
  login: loginReducer,
  manualCreator: ManualCreatorReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'exercises'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
