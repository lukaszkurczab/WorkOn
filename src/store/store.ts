import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import atlasReducer from './reducers/atlasReducer';
import plansReducer from './reducers/planReducer';
import trainingReducer from './reducers/trainingReducer';
import sessionReducer from './slice/sessionSlice';
import userReducer from './slice/userSlice';
import exercisesReducer from './reducers/exercisesReducer';

const rootReducer = combineReducers({
  atlas: atlasReducer,
  plans: plansReducer,
  training: trainingReducer,
  session: sessionReducer,
  user: userReducer,
  exercises: exercisesReducer,
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

export { store, persistor };
