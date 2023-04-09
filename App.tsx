import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/components/navigation/navigation';
import MainScreen from './src/screens/mainScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation>
        <MainScreen />
      </Navigation>
    </>
  );
};

export default App;