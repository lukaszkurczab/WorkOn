import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/components/navigation/navigation';
import MainScreen from './src/screens/mainScreen/mainScreen';
import PlanTableScreen from './src/screens/planTableScreen/planTableScreen';
import PlansListScreen from './src/screens/plansListScreen/plansListScreen';
import ArticlesSelectScreen from './src/screens/articlesSelectScreen/articlesSelectScreen';
import ArticlesListScreen from './src/screens/articlesListScreen/articlesListScreen';
import AtlasScreen from './src/screens/atlasScreen/atlasScreen';
import WorkoutScreen from './src/screens/workoutScreen/workoutScreen';
import WorkoutSummaryScreen from './src/screens/workoutSummaryScreen/workoutSummaryScreen';
import PlanEditScreen from './src/screens/planEditScreen/planEditScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const App = () => {
  AsyncStorage.clear();
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
          <Navigation>
            <Stack.Navigator initialRouteName="MainScreen">
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlansListScreen"
                component={PlansListScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanTableScreen"
                component={PlanTableScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ArticlesSelectScreen"
                component={ArticlesSelectScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ArticlesListScreen"
                component={ArticlesListScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AtlasScreen"
                component={AtlasScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WorkoutScreen"
                component={WorkoutScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WorkoutSummaryScreen"
                component={WorkoutSummaryScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanEditScreen"
                component={PlanEditScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </Navigation>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;