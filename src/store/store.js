import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import exerciseReducer from './reducers/exerciseReducer';
import planReducer from './reducers/planReducer';
import trainingReducer from "./reducers/trainingReducer";

const rootReducer = combineReducers({ 
  exercises: exerciseReducer,
  plans: planReducer,
  training: trainingReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)