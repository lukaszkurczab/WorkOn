import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/components/navigation/navigation';
import MainScreen from './src/screens/mainScreen/mainScreen';
import PlanTableScreen from './src/screens/planTableScreen/planTableScreen';
import PlansListScreen from './src/screens/plansListScreen/plansListScreen';
import ArticlesSelectScreen from './src/screens/articlesSelectScreen/articlesSelectScreen';
import ArticlesListScreen from './src/screens/articlesListScreen/articlesListScreen';
import AtlasScreen from './src/screens/atlasScreen/atlasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
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
        </Stack.Navigator>
      </Navigation>
    </NavigationContainer>
  );
};

export default App;