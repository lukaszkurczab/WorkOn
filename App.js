import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './AppNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  AsyncStorage.clear();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
